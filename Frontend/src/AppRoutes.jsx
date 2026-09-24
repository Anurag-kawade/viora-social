import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="home-text">
              Welcome to{" "}
              <span className="viora">
                <span className="v">V</span>
                <span className="i">I</span>
                <span className="o">O</span>
                <span className="r">R</span>
                <span className="a">A</span>
              </span>
            </h1>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;