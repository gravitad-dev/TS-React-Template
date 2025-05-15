import { useAuthStore } from "@/lib/store";
import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (user?.token) {
    // const from = location.state?.from?.pathname || "/";
    const from =
      location.pathname === "/login"
        ? "/"
        : location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return children;
};
