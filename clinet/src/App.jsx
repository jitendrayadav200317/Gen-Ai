import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./features/auth/pages/Login.jsx"));
const Register = lazy(() => import("./features/auth/pages/Register.jsx"));

function App() {
  return (
    <div className="bg-neutral-800 text-white">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
