import { useAuthStore } from '@/store/auth/auth.store'
import { Navigate, useLocation } from 'react-router-dom'

export function ProtectedRoute({ children }: React.PropsWithChildren) {
  const isLoggedIn = useAuthStore((state) => state.status) === 'authorized'
  const { pathname } = useLocation()

  if (!isLoggedIn && pathname) {
    return <Navigate to={`/login?from=${pathname}`} />
  }

  return children
}
