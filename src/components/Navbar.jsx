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
      {/* 1. LOGO (Ahora es una imagen) */}
      <div className="nav-brand">
        <Link to="/">
          {/* La ruta comienza con / porque está en la carpeta public */}
          <img src="/logo1.png" alt="Logo Consultorio" className="navbar-logo" />
        </Link>
      </div>

      {/* 2. ENLACES */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/profesionales">Profesionales</Link>
        <Link to="/contacto">Contacto</Link>
        
        {user ? (
          <div className="user-menu">
            <span className="user-name">{user.name}</span>
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