// Añadir al carrito
const [cart, setCart] = useState([]);

const handleAddToCart = (product) => {
  setCart([...cart, product]);
  alert(`${product.name} añadido al carrito`);
};

// En el JSX, dentro de cada producto:
<button className="add-to-cart" onClick={() => handleAddToCart(product)}>
  Añadir al carrito
</button>
