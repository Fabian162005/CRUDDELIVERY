import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleCategoryClick, categories } from '../utils/categoryLogic';
import '../assets/Productos.css';

const Productos = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="logo">PideloYa</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contáctanos</a></li>
        </ul>
      </nav>

      <section className="slider" id="inicio">
        <div className="slider-overlay">
          <div className="slider-content">
            <h1>Delicias a tu Puerta</h1>
            <p>¡Delivery Express en menos de 30 minutos!</p>
            <a href="#productos" className="btn btn-primary">Ver Menú</a>
          </div>
        </div>
      </section>

      <section className="section" id="categorias">
        <h2 className="section-title">Categorías</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <div 
                className="category-card" 
                onClick={() => handleCategoryClick(category.name, navigate)}
              >
                <div className="category-icon">{category.icon}</div>
              </div>
              <h3 className="category-title">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ... (secciones de contacto y footer permanecen igual) ... */}
    </>
  );
};

export default Productos;