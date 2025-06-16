import { createContext, useContext, useEffect, useState } from 'react';

import { Loading } from '@/components/ui/Loading';
import type { AuthTokenResponse } from '@/types/AuthTokenResponse';
import { getItem, removeItem, setItem } from '@/utils/Storage';

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (tokenData: AuthTokenResponse) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContextInitValue: AuthContextType = {
  isAuthenticated: false,
  signIn: async (tokendata) => {},
  signOut: async () => {},
};
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getItem<AuthTokenResponse>('auth');

      const now = Math.floor(Date.now() / 1000);
      const expiresAt =
        token?.created_at && token?.expires_in
          ? token.created_at + token.expires_in
          : 0;

      const isValid = expiresAt > now;
      console.log('printing is Valid', isValid, expiresAt, now);
      setIsAuthenticated(isValid);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (tokenData: AuthTokenResponse) => {
    await setItem('auth', tokenData);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await removeItem('auth');
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log;
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
