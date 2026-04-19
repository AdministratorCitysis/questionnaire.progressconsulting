import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAdminAuth } from '../context/AdminAuthContext'

/**
 * Drop-in replacement for <Route> that enforces admin authentication.
 *
 * Lifecycle:
 * 1. On first mount (isChecked=false): renders nothing and triggers checkAuth().
 *    checkAuth() calls GET /api/auth/me to validate the stored token.
 * 2. If the token is valid:    renders the protected component.
 * 3. If invalid/missing/expired: clears the token and redirects to /admin/login.
 *
 * The check is skipped on subsequent navigations within the same app session
 * (isChecked stays true after the first successful check or after login).
 * This avoids redundant API calls on every route change while still catching
 * expired tokens on fresh page loads.
 *
 * Security properties:
 * - An attacker who navigates directly to /admin/dashboard is immediately
 *   redirected if they have no valid token.
 * - An expired or revoked token is detected the next time the app loads.
 * - The backend independently rejects every protected request with 401
 *   even if the frontend state is somehow stale.
 */
export default function ProtectedAdminRoute({ component: Component, ...rest }) {
  const { admin, isChecked, isCheckingAuth, checkAuth } = useAdminAuth()

  // Validate token against the backend on first protected-route mount.
  // The guard inside prevents re-checking once we already have a result.
  useEffect(() => {
    if (!isChecked) {
      checkAuth()
    }
  }, [isChecked, checkAuth])

  return (
    <Route
      {...rest}
      render={(props) => {
        // Auth check not yet started or still in progress → show nothing.
        // This prevents a flash-redirect before the backend responds.
        if (!isChecked || isCheckingAuth) return null

        // Check complete: no valid admin → go to login.
        if (!admin) return <Redirect to="/admin/login" />

        // Valid session → render the protected component.
        return <Component {...props} />
      }}
    />
  )
}
