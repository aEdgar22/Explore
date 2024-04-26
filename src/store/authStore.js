// authStore.js
import {create} from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  login: (email, password) => {
    // Simulamos el inicio de sesión con datos quemados
    const userData = {
      id: '1',
      name: 'edgar',
      email: email,
    };
    set({ user: userData });
  },
}));

export default useAuthStore;
