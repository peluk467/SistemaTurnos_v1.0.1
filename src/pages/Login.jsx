import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Enviamos los datos limpios de espacios
    const result = login(identifier.trim(), password.trim());
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        {error && <p style={{color: 'red'}}>{error}</p>}
        
        <form onSubmit={handleLogin}>
          <input 
            className="login-input"
            type="text" 
            placeholder="Correo o Celular" 
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input 
            className="login-input"
            type="password" 
            placeholder="Contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Ingresar</button>
        </form>
        
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;