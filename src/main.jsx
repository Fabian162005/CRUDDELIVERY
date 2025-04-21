import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Tecnologia from './pages/Tecnologia';
import Comida from './pages/Comida';
import Mascotas from './pages/Mascotas';
import Farmacia from './pages/Farmacia';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Productos />} />
        <Route path="tecnologia" element={<Tecnologia />} />
        <Route path="comida" element={<Comida />} />
        <Route path="mascotas" element={<Mascotas />} />
        <Route path="farmacia" element={<Farmacia />} />
      </Route>
    </Routes>
  </BrowserRouter>
);