import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Usuarios } from "./pages/dashboard/Usuarios";
import { Alias } from "./pages/dashboard/Alias";
import { Dashboards } from "./pages/dashboard/Dashboards";
import { Soporte } from "./pages/dashboard/Soporte";
import { Notificaciones } from "./pages/dashboard/Notificaciones";
import { Historial } from "./pages/dashboard/Historial";
import { Ajustes } from "./pages/dashboard/Ajustes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="alias" element={<Alias />} />
          <Route path="dashboards" element={<Dashboards />} />
          <Route path="notificaciones" element={<Notificaciones />} />
          <Route path="historial" element={<Historial />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="soporte" element={<Soporte />} />
        </Route>

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

