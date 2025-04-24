import React, { useState } from 'react';
import '../assets/Tecnologia.css'; // Asegúrate de que esta ruta sea correcta

function Tecnologia() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState([]);

  const categories = ['Todos', 'Smartphones', 'Laptops', 'Tablets', 'Accesorios'];
  const products = [
    { id: 1, name: 'iPhone 13', category: 'Smartphones', price: 999, img: '../img/iphone 13.png', stock: 5 },
    { id: 2, name: 'MacBook Air', category: 'Laptops', price: 1199, img: '../img/macbook air .png', stock: 3 },
    { id: 3, name: 'iPad Pro', category: 'Tablets', price: 799, img: '../img/ipad pro.png', stock: 4 },
    { id: 4, name: 'Apple Watch', category: 'Accesorios', price: 399, img: '../img/apple watch.jpg', stock: 6 },
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
    <div className="tech-page-container">
      {/* Encabezado */}
      <header className="tech-header">
        <h2>Tecnología</h2>
        <p>Explora nuestros últimos dispositivos y gadgets tecnológicos, entregados directamente en tu puerta.</p>
      </header>

      {/* Categorías arriba */}
      <div className="tech-categories-top">
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

      {/* Productos + Carrito */}
      <div className="tech-main-layout">
        {/* Sección de productos */}
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

        {/* Vista previa del carrito */}
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

export default Tecnologia;