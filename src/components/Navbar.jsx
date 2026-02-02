import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Logotipo / Nombre del Consultorio */}
      <div className="nav-brand">
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
          CONSULTORIO BAJO LA VIÑA
        </Link>
      </div>

      {/* Enlaces de Navegación */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/profesionales">Profesionales</Link>
        <Link to="/contacto">Contacto</Link>
        
        {/* Lógica: ¿Hay usuario logueado? */}
        {user ? (
          <div className="user-menu">
            <span className="user-name">Hola, {user.name}</span>
            <Link to="/dashboard" className="btn-dashboard">Mi Cuenta</Link>
            <button onClick={handleLogout} className="btn-logout">Salir</button>
          </div>
        ) : (
          <Link to="/login" className="btn-ingresar">Ingresar</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;