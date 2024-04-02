// routes.js
import { lazy } from "react";

const NotFoundPage = lazy(() =>
  import("../pages/pageCondition/notFound.index")
);
const AuthPage = lazy(() => import("../pages/auth/index"));
const ForgotPassword = lazy(() => import("@/pages/auth/forgotPassword"));
const MainHome = lazy(() => import("@/pages/home/index"));
const Home = lazy(() => import("@/pages/app/index"));

export const publicRoutes = [
  { path: "auth", element: <AuthPage /> },
  { path: "auth/forgot-password", element: <ForgotPassword /> },
  { path: "/", element: <MainHome /> },
  { path: "*", element: <NotFoundPage /> },
];

export const privateRoutes = [{ path: "home", element: <Home /> }];
