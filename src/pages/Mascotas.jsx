import React from 'react';
import { useState } from 'react';
import '../assets/Mascotas.css'; // Asegúrate de que esta ruta sea correcta


function Mascotas() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState([]);

  const categories = ['Todos', 'Alimentos', 'Juguetes', 'Accesorios', 'Higiene'];
  const products = [
    { id: 1, name: 'Croquetas Premium', category: 'Alimentos', price: 25, img: '../img/croquetas.png', stock: 10 },
    { id: 2, name: 'Pelota de Goma', category: 'Juguetes', price: 8, img: '../img/pelota.png', stock: 15 },
    { id: 3, name: 'Collar Antipulgas', category: 'Accesorios', price: 12, img: '../img/collar.png', stock: 7 },
    { id: 4, name: 'Champú Canino', category: 'Higiene', price: 10, img: '../img/shampoo.png', stock: 5 },
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
    <div className="pet-page-container">
      <header className="pet-header">
        <h2>Mascotas</h2>
        <p>Cuida y consiente a tus mascotas con nuestros productos especializados.</p>
      </header>

      <div className="pet-categories-top">
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

      <div className="pet-main-layout">
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

export default Mascotas;