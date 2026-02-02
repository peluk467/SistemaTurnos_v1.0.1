import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Validamos existencia limpiando espacios
    if (users.find(u => u.email.trim() === newUser.email.trim())) {
      return { success: false, message: 'El correo ya está registrado.' };
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
  };

  const login = (identifier, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Limpiamos espacios antes de comparar
    const cleanId = identifier.trim();
    const cleanPass = password.trim();

    const foundUser = users.find(u => {
      // Comparamos email O teléfono (convertido a string)
      const isEmail = u.email.trim() === cleanId;
      const isPhone = u.phone.toString().trim() === cleanId;
      const isPass = u.password.trim() === cleanPass;
      
      return (isEmail || isPhone) && isPass;
    });

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return { success: true };
    }
    
    return { success: false, message: 'Credenciales incorrectas.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};