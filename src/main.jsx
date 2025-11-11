 import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// 🔹 Importa los estilos globales
import './styles/global.css';

// 🔹 Renderiza la app principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
