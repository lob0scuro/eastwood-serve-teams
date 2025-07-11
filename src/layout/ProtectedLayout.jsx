import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const ProtectedLayout = () => {
  const { authenticated } = useAuth();
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
