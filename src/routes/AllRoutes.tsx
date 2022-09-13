import { Route, Routes } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
