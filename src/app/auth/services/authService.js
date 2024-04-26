// La lógica de autenticación permanece igual
const login = async (email, password) => {
    // Simula la autenticación
    return { email }; // Retorna los datos del usuario como si fueran la respuesta de un servidor
  };
  
  const register = async (userInfo) => {
    // Simula la registración
    return userInfo; // Retorna la información del usuario
  };
  
  export { login, register };
  