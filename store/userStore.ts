import { create } from 'zustand';
import type { User } from '@/types';

interface UserState {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('currentUser') || 'null')
    : null,
  setCurrentUser: (user) => {
    if (typeof window !== 'undefined') {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('currentUser');
      }
    }
    set({ currentUser: user });
  },
  clearUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    set({ currentUser: null });
  },
}));
