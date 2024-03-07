/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  const { given_name } = user;

  if (given_name === "1") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
