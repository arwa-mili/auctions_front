import React, { createContext, useContext, useState, ReactNode } from 'react';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email?: string, password?: string) => Promise<AuthUser>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  const mockUser = (email = 'jane.doe@example.com'): AuthUser => ({
    id: 'mock-id-1',
    name: 'Jane Doe',
    email,
  });

  const signIn = async (email?: string, password?: string) => {
    setLoading(true);
    // simulate server call
    await new Promise((res) => setTimeout(res, 500));
    const u = mockUser(email);
    setUser(u);
    setLoading(false);
    return u;
  };

  const signOut = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 200));
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};