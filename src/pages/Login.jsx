import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !confirmPassword) {
      setError('Por favor completa todos los campos');
      setMensaje('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setMensaje('');
      return;
    }

    if (name === 'Admin' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      setError('');
      setMensaje(`¡Bienvenido, ${name}!`);
      navigate('/'); // Redirige al home después de iniciar sesión
    } else {
      setError('Credenciales incorrectas');
      setMensaje('');
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />

          <div className="login-password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <span className="login-eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="login-password-wrapper">
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Verificar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="login-input"
            />
            <span className="login-eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? '🙈' : '👁️'}
            </span>
          </div>

          {error && <p className="login-error">{error}</p>}
          {mensaje && <p className="login-mensaje">{mensaje}</p>}

          <button type="submit" className="login-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
