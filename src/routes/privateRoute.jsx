import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const useAuth = () => {
  const isLoggedIn = Cookies.get("token");
  return !!isLoggedIn; // Return true if token exists, false otherwise
};

const PrivateRoute = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
