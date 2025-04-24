// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Productos from './pages/Productos';
import Comida from './pages/Comida';
import Farmacia from './pages/Farmacia';
import Mascotas from './pages/Mascotas';
import Tecnologia from './pages/Tecnologia';
import Login from './pages/Login';
import Slider from './pages/Slider';
import Contactanos from './pages/Contactanos';
import Navbar from './pages/Navbar';
import Carrito from './pages/Carrito';  // Importar correctamente el componente Carrito
import { logout } from './utils/logout'; // Importar la función logout

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar el estado de autenticación al cargar la página
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  // Función de logout
  const handleLogout = () => {
    logout(setIsAuthenticated);  // Llama a la función logout
  };

  return (
    <Router>
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <Slider />
                <Productos />
                <Contactanos />
              </>
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Rutas protegidas */}
        <Route
          path="/comida"
          element={isAuthenticated ? <Comida /> : <Navigate to="/" />}
        />
        <Route
          path="/farmacia"
          element={isAuthenticated ? <Farmacia /> : <Navigate to="/" />}
        />
        <Route
          path="/mascotas"
          element={isAuthenticated ? <Mascotas /> : <Navigate to="/" />}
        />
        <Route
          path="/tecnologia"
          element={isAuthenticated ? <Tecnologia /> : <Navigate to="/" />}
        />

        {/* Ruta del carrito */}
        <Route
          path="/carrito"
          element={isAuthenticated ? <Carrito /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
