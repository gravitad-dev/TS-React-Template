import { useAuthStore } from "@/lib/store";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!user?.token && location.pathname !== "/login") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
