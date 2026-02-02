import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Importación de Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import Profesionales from './pages/Profesionales'; // Nombre actualizado
import Contacto from './pages/Contacto';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ruta Principal (Inicio) */}
          <Route path="/" element={<Home />} />
          
          {/* Rutas Públicas */}
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Ruta Protegida (Solo usuarios logueados) */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <PatientDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Cualquier ruta desconocida redirige al inicio */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;