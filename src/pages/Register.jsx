import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useInputControl } from '../hooks/useInputControl';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const name = useInputControl();
  const surname = useInputControl();
  const dni = useInputControl();
  const phone = useInputControl();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('paciente');
  const [proKey, setProKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password.length <= 6) return setError('La contraseña es muy corta.');
    if (role === 'profesional' && proKey !== 'laviña1234') {
      return setError('Clave de profesional incorrecta.');
    }

    // CREAMOS EL USUARIO LIMPIANDO ESPACIOS (.trim)
    const newUser = {
      name: name.value.trim(),
      surname: surname.value.trim(),
      dni: dni.value.trim(),
      phone: phone.value.trim(),
      email: email.trim(),
      password: password.trim(),
      role
    };

    const result = register(newUser);
    if (result.success) {
      alert('Registro exitoso.');
      navigate('/login');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registro</h2>
      {error && <p className="error-msg">{error}</p>}
      
      <form onSubmit={handleSubmit} className="form-group" autoComplete="off">
        <input 
          className="form-input"
          placeholder="Nombre" 
          value={name.value} 
          onChange={(e) => name.onChange(e, 'textOnly')} 
          required 
          autoComplete="off"
        />
        <input 
          className="form-input"
          placeholder="Apellido" 
          value={surname.value} 
          onChange={(e) => surname.onChange(e, 'textOnly')} 
          required 
          autoComplete="off"
        />
        <input 
          className="form-input"
          placeholder="DNI" 
          value={dni.value} 
          onChange={(e) => dni.onChange(e, 'numberOnly')} 
          maxLength={8}
          required 
          autoComplete="off"
        />
        <input 
          className="form-input"
          placeholder="Teléfono" 
          value={phone.value} 
          onChange={(e) => phone.onChange(e, 'numberOnly')} 
          required 
          autoComplete="off"
        />
        <input 
          className="form-input"
          type="email" 
          placeholder="Correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          autoComplete="off"
        />
        <input 
          className="form-input"
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          autoComplete="new-password"
        />
        
        <label>Rol:</label>
        <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="paciente">Paciente</option>
          <option value="profesional">Profesional</option>
        </select>

        {role === 'profesional' && (
          <input 
            className="form-input"
            type="password" 
            placeholder="Clave Admin" 
            value={proKey} 
            onChange={(e) => setProKey(e.target.value)} 
          />
        )}

        <button type="submit" className="btn-register">Registrarse</button>
      </form>
    </div>
  );
};
export default Register;