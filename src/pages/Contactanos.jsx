import React, { useState } from 'react';
import '../assets/Contactanos.css'; // Asegúrate de que esta ruta sea correcta

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');
    setMensajeExito('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="contactanos-container">
      <h2>¡Contáctanos!</h2>
      <form onSubmit={handleSubmit} className="contactanos-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {mensajeExito && <p className="success-message">{mensajeExito}</p>}

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contactanos;
