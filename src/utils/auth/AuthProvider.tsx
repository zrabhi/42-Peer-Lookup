import { Loading } from '@components/ui/Loading';
import { AUTH_KEY, getItem, removeItem, setItem } from '@utils/Storage';
import { createContext, useContext, useEffect, useState } from 'react';

import type { AuthTokenResponse } from '@/types/AuthTokenResponse';

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (tokenData: AuthTokenResponse) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getItem<AuthTokenResponse>(AUTH_KEY);

      const now = Math.floor(Date.now() / 1000);
      const expiresAt =
        token?.created_at && token?.expires_in
          ? token.created_at + token.expires_in
          : 0;

      const isValid = expiresAt > now;
      const secondsLeft = expiresAt - Math.floor(Date.now() / 1000);
      const minutesLeft = Math.floor(secondsLeft / 60);

      console.log(`Token expires in ${minutesLeft} minutes`);
      setIsAuthenticated(isValid);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const signIn = async (tokenData: AuthTokenResponse) => {
    await setItem(AUTH_KEY, tokenData);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    await removeItem(AUTH_KEY);
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
