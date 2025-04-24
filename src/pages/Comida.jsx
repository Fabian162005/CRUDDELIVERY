import React from 'react';
import { useState } from 'react';
import '../assets/Comida.css'; // Asegúrate de que esta ruta sea correcta


function Comida() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cart, setCart] = useState([]);

  const categories = ['Todos', 'Italiana', 'Mexicana', 'Japonesa', 'Postres'];
  const dishes = [
    { id: 1, name: 'Pizza Margherita', category: 'Italiana', price: 12, img: '../img/pizza.jpg', stock: 10 },
    { id: 2, name: 'Tacos al Pastor', category: 'Mexicana', price: 9, img: '../img/tacos.jpg', stock: 8 },
    { id: 3, name: 'Sushi Variado', category: 'Japonesa', price: 15, img: '../img/sushi.jpg', stock: 6 },
    { id: 4, name: 'Tiramisú', category: 'Postres', price: 7, img: '../img/tiramisu.jpg', stock: 5 },
  ];

  const filteredDishes =
    selectedCategory === 'Todos'
      ? dishes
      : dishes.filter(dish => dish.category === selectedCategory);

  const handleAddToCart = (dish) => {
    if (dish.stock <= 0) return alert('Plato sin disponibilidad');

    const updatedCart = [...cart];
    const existing = updatedCart.find(item => item.id === dish.id);

    if (existing) {
      existing.qty += 1;
    } else {
      updatedCart.push({ ...dish, qty: 1 });
    }

    setCart(updatedCart);
    alert(`${dish.name} añadido al pedido`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="food-page-container">
      {/* Encabezado */}
      <header className="food-header">
        <h2>Comida</h2>
        <p>Descubre nuestros deliciosos platos de distintos restaurantes y pide tus favoritos a domicilio.</p>
      </header>

      {/* Categorías arriba */}
      <div className="food-categories-top">
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

      {/* Platos + Carrito */}
      <div className="food-main-layout">
        {/* Sección de platos */}
        <section className="products">
          {filteredDishes.map(dish => (
            <div key={dish.id} className="product-card">
              <img src={dish.img} alt={dish.name} />
              <h4>{dish.name}</h4>
              <p className="price">${dish.price}</p>
              <p className="stock">Disponibles: {dish.stock}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(dish)}>
                Añadir al pedido
              </button>
            </div>
          ))}
        </section>

        {/* Vista previa del carrito */}
        <section className="cart-preview">
          <h3>Pedido</h3>
          {cart.length === 0 ? (
            <p>Tu pedido está vacío.</p>
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

export default Comida;
