import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Auth from "./pages/auth";
import Test from "./pages/Test/test";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import EmailSent from "./pages/auth/forgotPassword/index.emailSent";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },

  {
    path: "/",
    element: <Test />,
  },

  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/auth/reset-password",
    element: <ResetPassword />,
  },

  {
    path: "/auth/forgot-password/email-sent",
    element: <EmailSent />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
