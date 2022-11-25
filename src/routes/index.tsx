import { Navigate, redirect, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuth } from "../context/UserContext";
import { PublicRoutes } from "./PublicRoutes";
import { useHymns } from "../context/HymnContext";

// import { useLocation } from "react-router-dom";

export const AppRouter = () => {
  // const location = useLocation();
  const { token } = useAuth();
  // const { mensaje } = useHymns();
  // if (mensaje) {
  //   redirect("/login");
  // }
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
