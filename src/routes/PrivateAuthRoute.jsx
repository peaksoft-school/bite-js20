import { Navigate, Outlet } from 'react-router';

export const PrivateAuthRoute = ({ roles, fallbackPath = '/login' }) => {
  const role = 'ADMIN';

  const allowedRoles = Array.isArray(roles) ? roles : [roles];
  
  const isAllowed = allowedRoles.includes(role);

  if (!isAllowed) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <Outlet />;
};