const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

// ─── Token storage ────────────────────────────────────────────────────────────
// sessionStorage: cleared automatically when the browser tab is closed.
// This is intentional — the admin session does not survive a cold browser open.
// The JWT itself also expires after 24 h as a secondary safeguard.

const TOKEN_KEY = 'admin_session_token'

export function storeToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export function getStoredToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function clearStoredToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

// ─── API ──────────────────────────────────────────────────────────────────────

export async function authenticateAdmin({ email, password }) {
  let response
  try {
    response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
  } catch {
    throw { code: 'NETWORK_ERROR' }
  }

  if (!response.ok) {
    if (response.status === 429) throw { code: 'TOO_MANY_ATTEMPTS' }
    if (response.status === 401) throw { code: 'INVALID_CREDENTIALS' }
    if (response.status === 400) throw { code: 'MISSING_CREDENTIALS' }
    throw { code: 'UNKNOWN' }
  }

  const data = await response.json()
  storeToken(data.access_token)
  return data
}

export async function fetchCurrentAdmin() {
  const token = getStoredToken()
  if (!token) return null

  let response
  try {
    response = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  } catch {
    // Network failure — preserve token, report as unauthenticated for now.
    return null
  }

  if (!response.ok) {
    // 401 = expired or invalid token. Clear it immediately.
    if (response.status === 401) clearStoredToken()
    return null
  }

  return response.json()
}

export function logoutAdmin() {
  clearStoredToken()
}

// ─── Error messages ───────────────────────────────────────────────────────────

const AUTH_ERROR_MESSAGES = {
  MISSING_CREDENTIALS: 'Veuillez renseigner votre email et votre mot de passe.',
  INVALID_CREDENTIALS: 'Identifiants invalides. Veuillez vérifier vos informations.',
  TOO_MANY_ATTEMPTS: 'Trop de tentatives. Veuillez patienter une minute.',
  NETWORK_ERROR: 'Impossible de joindre le serveur. Vérifiez votre connexion.',
  UNKNOWN: 'Une erreur est survenue. Veuillez réessayer.',
}

export function getAdminAuthErrorMessage(error) {
  if (!error || !error.code) return AUTH_ERROR_MESSAGES.UNKNOWN
  return AUTH_ERROR_MESSAGES[error.code] || AUTH_ERROR_MESSAGES.UNKNOWN
}
