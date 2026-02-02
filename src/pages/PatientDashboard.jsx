import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useAuth } from '../context/AuthContext';
import '../css/Dashboard.css'; // CSS separado

const PatientDashboard = () => {
  const { user } = useAuth(); 
  // Datos mock para el ejemplo
  const [turnoConfirmado, setTurnoConfirmado] = useState({
     id: '01',
     medico: 'Lic. Ejemplo',
     fecha: '20/10/2023',
     hora: '10:00',
     lugar: 'Calle ejemplo 123'
  });

  const descargarComprobante = () => {
    const doc = new jsPDF();

    // Encabezado
    doc.setFontSize(18);
    doc.text('Comprobante de Turno Médico', 20, 20);
    doc.setFontSize(14);
    doc.text('Consultorio Kinésico "Bajo la Viña"', 20, 30);
    
    // Línea separadora
    doc.line(20, 35, 190, 35);

    // Datos del cuerpo
    doc.setFontSize(12);
    doc.text(`ID Turno: ${turnoConfirmado.id}`, 20, 50);
    // Usamos datos reales del usuario logueado si existen, sino placeholders
    doc.text(`Paciente: ${user?.name || 'Lucas'} ${user?.surname || 'Fernández'}`, 20, 60);
    doc.text(`DNI: ${user?.dni || '47813480'}`, 20, 70);
    doc.text(`Médico: ${turnoConfirmado.medico}`, 20, 80);
    doc.text(`UBICACIÓN: ${turnoConfirmado.lugar}`, 20, 90);
    doc.text(`Fecha: ${turnoConfirmado.fecha}`, 20, 100);
    doc.text(`Hora: ${turnoConfirmado.hora} hs`, 20, 110);

    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Por favor concurrir 10 minutos antes, Muchas Gracias', 20, 130);

    doc.save('turno-comprobante.pdf');
  };

  return (
    <div className="dashboard-container">
      <h1>Mis Turnos</h1>
      <div className="turno-card">
        <h3>Turno Confirmado</h3>
        <p>Médico: {turnoConfirmado.medico}</p>
        <p>Horario: {turnoConfirmado.hora}</p>
        <button className="btn-pdf" onClick={descargarComprobante}>
          Descargar Comprobante PDF
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard;