import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layouts
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';

// Auth Pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';

// Dashboard Pages
import { Dashboard } from './pages/dashboard/Dashboard';
import { Configuracion } from './pages/dashboard/Configuracion';
import { Usuarios } from './pages/dashboard/Usuarios';
import { Alias } from './pages/dashboard/Alias';
import { Dashboards } from './pages/dashboard/Dashboards';
import { Soporte } from './pages/dashboard/Soporte';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Rutas de Autenticación */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Rutas del Dashboard */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="configuracion" element={<Configuracion />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="alias" element={<Alias />} />
            <Route path="dashboards" element={<Dashboards />} />
            <Route path="soporte" element={<Soporte />} />
          </Route>

          {/* Redirección raíz al login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Catch-all: redirige rutas no válidas */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
