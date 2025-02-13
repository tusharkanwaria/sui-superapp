import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/landing-page" element={<Landing />} />
      <Route path="/login-page" element={<Login />} />
      <Route path="/profile-page" element={<Profile />} />
      <Route path="/register-page" element={<Register />} />
      <Route path="*" element={<Navigate to="/landing-page" replace />} />
      {/* Set the default route to /landing-page */}
    </Routes>
  </BrowserRouter>
);