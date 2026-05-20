import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  // TODO: replace with real auth state from store
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}