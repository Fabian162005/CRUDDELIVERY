import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Productos from './pages/Productos'; // Importa el componente Productos
import Slider from './pages/Slider'; // Importa el componente Productos
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login/> 
      <Slider/> 
      <Productos/>
    </>
  );
}

export default App;