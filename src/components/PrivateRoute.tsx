import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
};
