import React, { useState, useEffect } from 'react';
import '../assets/Slider.css'; // Asegúrate de que la ruta del CSS sea correcta
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Asegúrate de tener instalado lucide-react

const images = [
    { src: "../img/1.jpg", alt: "Imagen 1" },
    { src: "../img/2.jpg", alt: "Imagen 2" },
    { src: "../img/3.jpg", alt: "Imagen 3" },
  ];

const CustomSlider = () => {
    const [current, setCurrent] = useState(0);
  
    const handlePrev = () => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50 space-y-8">
        <div className="relative w-full max-w-7xl h-[580px] mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-cover transition duration-500 ease-in-out"
          />
  
          {/* Botón Anterior */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow transition"
          >
            <ChevronLeft size={28} />
          </button>
  
          {/* Botón Siguiente */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
  
        {/* Indicadores */}
        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-gray-800' : 'bg-gray-300'} transition`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomSlider;