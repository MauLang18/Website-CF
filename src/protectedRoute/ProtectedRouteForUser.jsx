/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  const { unique_name, family_name, given_name, nameid } = user;

  if (given_name === "1") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
