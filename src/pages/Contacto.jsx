import React from 'react';
import '../css/Contacto.css'; // Crearemos este CSS

const Contacto = () => {
  return (
    <div className="contacto-page">
      {/* Título e Icono */}
      <div className="contacto-header">
        <div className="icon-stethoscope">🩺</div>
        <h1>CONTÁCTANOS</h1>
        <p>Estamos aquí para ayudarte. Completa el formulario o visítanos en nuestra sede.</p>
      </div>

      <div className="contacto-content">
        {/* Formulario Izquierda */}
        <form className="contacto-form">
          <div className="form-row">
            <div className="form-group">
              <label>NOMBRE <span className="req">*</span></label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>APELLIDO <span className="req">*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>E-MAIL <span className="req">*</span></label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>ASUNTO <span className="req">*</span></label>
              <select>
                <option>Seleccione...</option>
                <option>Turnos</option>
                <option>Consulta General</option>
                <option>Reclamos</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>MENSAJE <span className="req">*</span></label>
            <textarea rows="5"></textarea>
          </div>

          <button type="submit" className="btn-enviar">ENVIAR MENSAJE</button>
        </form>

        {/* Sección Azul Derecha (Info + Mapa) */}
        <div className="contacto-info-card">
          <h2>INFORMACIÓN DE CONTACTO</h2>
          <hr className="divider"/>
          
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Dirección:</strong>
              <p>Ing. Mario Italo Palanca 10<br/>San Salvador de Jujuy, Jujuy, Argentina</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <strong>Teléfono:</strong>
              <p>3884-1234567</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💬</span>
            <div>
              <strong>WhatsApp:</strong>
              <p>+54 9 388 439 7876</p>
              <small>Cualquier Consulta las 24hs</small>
            </div>
          </div>

          {/* Mapa embebido de Google Maps (Centrado en Jujuy aprox) */}
          <div className="map-container">
            <iframe 
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.856984227838!2d-65.2971!3d-24.1858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDExJzA4LjkiUyA2NcKwMTcnNDkuNiJX!5e0!3m2!1ses!2sar!4v1630000000000!5m2!1ses!2sar" 
              width="100%" 
              height="200" 
              style={{border:0, borderRadius: '8px'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;