/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  const { given_name } = user;

  if (given_name === "2") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
