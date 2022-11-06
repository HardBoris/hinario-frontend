import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuth } from "../context/UserContext";
import { PublicRoutes } from "./PublicRoutes";

// import { useLocation } from "react-router-dom";

export const AppRouter = () => {
  // const location = useLocation();
  const { token } = useAuth();
  return (
    <Routes>
      {token ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
