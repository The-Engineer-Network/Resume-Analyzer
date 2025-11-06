
import { Navigate, Outlet, useLocation } from "react-router-dom";


export const ProtectedRoute = () => {
    const location = useLocation()
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate state={{ from: location }} to="/login" replace />;
};