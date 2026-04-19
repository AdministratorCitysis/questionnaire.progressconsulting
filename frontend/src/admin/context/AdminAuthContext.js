import React, { createContext, useContext, useState, useCallback } from 'react'
import {
  authenticateAdmin,
  fetchCurrentAdmin,
  logoutAdmin,
} from '../services/admin-auth-service'

const AdminAuthContext = createContext(null)

/**
 * Provides authentication state and actions for the entire admin area.
 * Wrap the admin routes (or the full app) with this provider.
 */
export function AdminAuthProvider({ children }) {
  // null  = no admin logged in
  // {...} = admin object returned by /auth/me
  const [admin, setAdmin] = useState(null)

  // false = auth has not been checked against the backend yet this session
  // true  = check completed (result is reflected in `admin`)
  const [isChecked, setIsChecked] = useState(false)

  const [isCheckingAuth, setIsCheckingAuth] = useState(false)

  /**
   * Validates the stored token against the backend.
   * Sets `admin` to the profile if valid, null otherwise.
   * Called by ProtectedAdminRoute on every protected page mount.
   */
  const checkAuth = useCallback(async () => {
    setIsCheckingAuth(true)
    try {
      const profile = await fetchCurrentAdmin()
      setAdmin(profile)
      setIsChecked(true)
      return profile
    } finally {
      setIsCheckingAuth(false)
    }
  }, [])

  /**
   * Calls the real login API, stores the token, and updates auth state.
   * Throws on failure (caller handles the error message).
   */
  const login = useCallback(async ({ email, password }) => {
    const data = await authenticateAdmin({ email, password })
    setAdmin(data.admin)
    setIsChecked(true)
    return data
  }, [])

  /**
   * Clears the stored token and resets auth state.
   * The caller is responsible for redirecting to /admin/login.
   */
  const logout = useCallback(() => {
    logoutAdmin()
    setAdmin(null)
    setIsChecked(false)
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{ admin, isChecked, isCheckingAuth, checkAuth, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) {
    throw new Error('useAdminAuth must be used inside <AdminAuthProvider>')
  }
  return ctx
}
