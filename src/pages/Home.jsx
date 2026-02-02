import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* SECCIÓN HERO (La imagen grande) */}
      <section className="hero">
        <div className="hero-content">
          <h1>CONSULTORIO BAJO LA VIÑA</h1>
          <p>Compromiso, tecnología y calidez humana al cuidado de su salud.</p>
          <Link to="/login" className="hero-btn">IR A MI CUENTA</Link>
        </div>
      </section>

      {/* SECCIÓN DE TARJETAS (Ahora solo 2) */}
      <section className="cards-section">
        
        {/* Tarjeta 1: Turnos */}
        <Link to="/login" style={{textDecoration: 'none'}}>
          <div className="card-item">
            <div className="icon">📅</div>
            <h3>Turnos Online</h3>
            <p>Gestione sus citas médicas</p>
          </div>
        </Link>
        
        {/* Tarjeta 2: Profesionales */}
        <Link to="/profesionales" style={{textDecoration: 'none'}}>
          <div className="card-item">
            <div className="icon">👨‍⚕️</div>
            <h3>Nuestros Profesionales</h3>
            <p>Conozca el cuerpo médico</p>
          </div>
        </Link>

      </section>
    </div>
  );
};

export default Home;