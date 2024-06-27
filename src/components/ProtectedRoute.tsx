// ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  element,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
