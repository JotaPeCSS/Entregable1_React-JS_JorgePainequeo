// Importa las dependencias principales de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa los estilos globales y el componente principal de la aplicación
import './index.css';
import App from './App';

// Crea el punto de montaje y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
