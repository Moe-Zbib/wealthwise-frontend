import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
  const user = { isLoggedIn: false };
  return user && user.isLoggedIn;
};

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
