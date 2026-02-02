import React, { useState, useEffect } from 'react';
import '../css/Profesionales.css';

const Profesionales = () => {
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    // 1. Obtenemos todos los usuarios guardados
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // 2. Filtramos solo los que tienen rol 'profesional'
    // (Asegúrate de haber registrado al menos uno con la clave 'laviña1234')
    const pros = allUsers.filter(u => u.role === 'profesional');
    setProfesionales(pros);
  }, []);

  return (
    <div className="pros-page">
      <div className="pros-header">
        <h1>Nuestros Profesionales</h1>
        <p>Equipo interdisciplinario al servicio de su salud</p>
      </div>

      <div className="pros-grid">
        {profesionales.length > 0 ? (
          profesionales.map((pro, index) => (
            <div key={index} className="pro-card">
              <div className="pro-avatar">
                {/* Mostramos la inicial del nombre */}
                {pro.name.charAt(0).toUpperCase()}
              </div>
              <div className="pro-details">
                <h3>Lic. {pro.name} {pro.surname}</h3>
                <span className="specialty-badge">Kinesiología</span>
                
                <div className="contact-info">
                  <p>📧 {pro.email}</p>
                  <p>📞 {pro.phone}</p>
                </div>

                <button className="btn-turn">Solicitar Turno</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-pros-msg">
            <div className="icon-alert">⚠️</div>
            <h3>No hay profesionales registrados aún.</h3>
            <p>Por favor, regístrese como "Profesional" usando la clave de acceso.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profesionales;