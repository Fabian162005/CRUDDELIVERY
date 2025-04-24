import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Productos.css'; // Asegúrate de que esta ruta sea correcta

const Productos = () => {
  return (
    <div className="full-width-page">
      {/* Categorías */}
      <section className="section" id="categorias">
        <h2 className="section-title">Categorías</h2>
        <div className="category-grid">
          {[ 
            { name: "Tecnología", icon: "💻", path: "/tecnologia", description: "Encuentra los mejores gadgets y dispositivos electrónicos." },
            { name: "Comida", icon: "🍔", path: "/comida", description: "Disfruta de los mejores platos y comida de calidad." },
            { name: "Mascotas", icon: "🐶", path: "/mascotas", description: "Todo lo necesario para tus amigos peludos." },
            { name: "Farmacia", icon: "💊", path: "/farmacia", description: "Productos de salud y bienestar para ti y tu familia." }
          ].map((category, index) => (
            <div className="category-item" key={index}>
              <Link to={category.path} className="category-link">
                <div className="category-card">
                  <div className="category-icon">{category.icon}</div>
                </div>
                <h3 className="category-title">{category.name}</h3>
              </Link>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Submenú explicativo sobre las categorías */}
      <section className="section" id="submenu">
        <h2 className="section-title">¿Qué ofrecemos?</h2>
        <div className="submenu-content">
          <div className="submenu-item">
            <h3>Tecnología</h3>
            <p>Desde smartphones, computadoras, hasta gadgets innovadores. Descubre productos que mejoran tu día a día.</p>
          </div>
          <div className="submenu-item">
            <h3>Comida</h3>
            <p>Disfruta de un menú delicioso que incluye opciones saludables, rápidas y sabrosas para todos los gustos.</p>
          </div>
          <div className="submenu-item">
            <h3>Mascotas</h3>
            <p>Encuentra comida, juguetes y artículos de cuidado para tus mascotas, para que siempre estén felices y saludables.</p>
          </div>
          <div className="submenu-item">
            <h3>Farmacia</h3>
            <p>Productos farmacéuticos esenciales para tu salud, suplementos y productos de cuidado personal a tu alcance.</p>
          </div>
        </div>
      </section>

      {/* Sección de preguntas frecuentes */}
      <section className="section" id="faq">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-content">
          <div className="faq-item">
            <h3>¿Cómo realizar un pedido?</h3>
            <p>Simplemente selecciona la categoría de productos que deseas, agrega los productos a tu carrito y sigue el proceso de pago.</p>
          </div>
          <div className="faq-item">
            <h3>¿Puedo devolver un producto?</h3>
            <p>Sí, si el producto no cumple con tus expectativas o está defectuoso, puedes devolverlo siguiendo nuestra política de devoluciones.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cuánto tiempo tarda el envío?</h3>
            <p>Los envíos pueden tardar entre 1 y 5 días hábiles, dependiendo de tu ubicación.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;