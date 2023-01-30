import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import Loading from "./Loading";
const customId = "toast id";
const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    toast.error(error.message, {
      toastId: customId,
    });
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/authentication" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
