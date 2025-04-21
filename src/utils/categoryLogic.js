export const handleCategoryClick = (categoryName, navigate) => {
  // Lógica para manejar el clic en categorías
  const routes = {
    'Tecnología': '/tecnologia',
    'Comida': '/comida',
    'Mascotas': '/mascotas',
    'Farmacia': '/farmacia'
  };
  
  const route = routes[categoryName] || '/';
  navigate(route);
};

export const categories = [
  { name: "Tecnología", icon: "💻", component: "Tecnologia" },
  { name: "Comida", icon: "🍔", component: "Comida" },
  { name: "Mascotas", icon: "🐶", component: "Mascotas" },
  { name: "Farmacia", icon: "💊", component: "Farmacia" }
];