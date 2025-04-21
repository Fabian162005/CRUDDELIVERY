import React, { useState } from 'react';
import '../assets/Productos.css'; // Importa el archivo CSS

const DeliveryPage = ({ onCategoryClick }) => {
    const handleCategoryClick = (categoryName) => {
      onCategoryClick(categoryName.toLowerCase().replace(' ', '-'));
    };
  
    return (
      <div className="full-width-page">
        {/* Categorías */}
        <section className="section" id="categorias">
          <h2 className="section-title">Categorías</h2>
          <div className="category-grid">
            {[
              { name: "Tecnología", icon: "💻" },
              { name: "Comida", icon: "🍔" },
              { name: "Mascotas", icon: "🐶" },
              { name: "Farmacia", icon: "💊" }
            ].map((category, index) => (
              <div className="category-item" key={index}>
                <div className="category-card" onClick={() => handleCategoryClick(category.name)}>
                  <div className="category-icon">{category.icon}</div>
                </div>
                <h3 className="category-title">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>
  
        {/* El resto de tu componente DeliveryPage (sin las secciones de categoría condicionales) */}
      </div>
    );
  };
  
  export default DeliveryPage;