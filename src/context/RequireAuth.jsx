import React from "react";
import useUser from "../hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isLogged } = useUser();
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split("/").pop();

  if (!isLogged && pathname !== "/register" && pathname !== "/forgotpass") {
    return <Navigate to="/login" />;
  }

  return children;
};
