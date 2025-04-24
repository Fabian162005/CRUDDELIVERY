import React from 'react';
import { useState } from 'react';
import '../assets/Farmacia.css'; // Asegúrate de que esta ruta sea correcta


function Farmacia() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState([]);

  const categories = ['Todos', 'Medicamentos', 'Suplementos', 'Cuidado Personal', 'Higiene'];
  const products = [
    { id: 1, name: 'Paracetamol 500mg', category: 'Medicamentos', price: 4, img: '../img/paracetamol.png', stock: 20 },
    { id: 2, name: 'Vitaminas C', category: 'Suplementos', price: 12, img: '../img/vitaminas.png', stock: 15 },
    { id: 3, name: 'Shampoo Anticaspa', category: 'Cuidado Personal', price: 6, img: '../img/shampoo.png', stock: 25 },
    { id: 4, name: 'Gel Antibacterial', category: 'Higiene', price: 3, img: '../img/gel_antibacterial.png', stock: 30 },
  ];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    if (product.stock <= 0) return alert('Producto sin stock');

    const updatedCart = [...cart];
    const existing = updatedCart.find(item => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      updatedCart.push({ ...product, qty: 1 });
    }

    setCart(updatedCart);
    alert(`${product.name} añadido al carrito`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="pharmacy-page-container">
      <header className="pharmacy-header">
        <h2>Farmacia</h2>
        <p>Productos farmacéuticos y de cuidado personal al alcance de tu mano.</p>
      </header>

      <div className="pharmacy-categories-top">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="pharmacy-main-layout">
        <section className="products">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">${product.price}</p>
              <p className="stock">Stock: {product.stock}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Añadir al carrito
              </button>
            </div>
          ))}
        </section>

        <section className="cart-preview">
          <h3>Carrito</h3>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} x{item.qty} - ${item.price * item.qty}
                  </li>
                ))}
              </ul>
              <p className="cart-total">
                <strong>Total:</strong> ${total.toFixed(2)}
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default Farmacia;