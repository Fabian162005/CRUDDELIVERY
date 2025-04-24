// src/utils/logout.js

export const logout = (setIsAuthenticated) => {
    // Eliminar el token de localStorage
    localStorage.removeItem('authToken');
  
    // Actualizar el estado de autenticación
    setIsAuthenticated(false);
  
    // Redirigir al login (puedes usar `window.location.href` o `Navigate`)
    window.location.href = "/";  // Esto redirige a la página de login
  };
  