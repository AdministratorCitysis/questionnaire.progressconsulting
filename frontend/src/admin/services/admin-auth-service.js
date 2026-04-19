const ADMIN_LOGIN_DELAY_MS = 900

const MOCK_ADMIN_CREDENTIALS = {
  email: 'admin@progressconsulting.be',
  password: 'progress-admin'
}

const AUTH_ERROR_MESSAGES = {
  MISSING_CREDENTIALS: 'Veuillez renseigner votre email et votre mot de passe.',
  INVALID_CREDENTIALS: 'Identifiants invalides. Veuillez verifier vos informations.',
  UNKNOWN: "Une erreur est survenue. Veuillez reessayer."
}

export function authenticateAdmin({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject({ code: 'MISSING_CREDENTIALS' })
        return
      }

      const normalizedEmail = String(email).trim().toLowerCase()
      const normalizedPassword = String(password)

      if (
        normalizedEmail === MOCK_ADMIN_CREDENTIALS.email &&
        normalizedPassword === MOCK_ADMIN_CREDENTIALS.password
      ) {
        resolve({
          user: {
            email: normalizedEmail,
            role: 'admin'
          },
          token: 'mock-admin-token'
        })
        return
      }

      reject({ code: 'INVALID_CREDENTIALS' })
    }, ADMIN_LOGIN_DELAY_MS)
  })
}

export function getAdminAuthErrorMessage(error) {
  if (!error || !error.code) {
    return AUTH_ERROR_MESSAGES.UNKNOWN
  }

  return AUTH_ERROR_MESSAGES[error.code] || AUTH_ERROR_MESSAGES.UNKNOWN
}
