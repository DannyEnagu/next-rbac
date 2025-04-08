import { create } from 'zustand';  
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

interface User {  
  id: string;  
  name: string;  
  email: string;
  permissions: string[];
  role: string;
}  

interface AuthState {  
  user: User | null;  
  token: string | null;  
  setUser: (userData: User) => void;  
  setToken: (token: string) => void;  
  clearUser: () => void;  
  hasPermission: (permission: string) => boolean;  
}  

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,  
      token: null,  
      setUser: (userData: User) => set({ user: userData }),  
      setToken: (token: string) => set({ token: token }),  
      clearUser: () => set({ user: null, token: null }),  
      hasPermission: (permission: string) => {  
        const user = get().user; // Use get() to access the current state  
        if (!user || !user.permissions) return false;  
        return user.permissions.includes(permission);  
      },  
    }),
    {
      name: 'auth-store', // Key for localStorage/sessionStorage
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default useAuthStore;