import { Navigate, Outlet } from 'react-router'

export const PrivateAuthRoute = ({ roles, element, fallbackPath = '/login' }) => {
  const role = 'GUEST'

  const allowedRoles = Array.isArray(roles) ? roles : [roles]

  const isAllowed = allowedRoles.includes(role)

  if (!isAllowed) {
    return <Navigate to={fallbackPath} replace />
  }

  return element ?? <Outlet />
}
