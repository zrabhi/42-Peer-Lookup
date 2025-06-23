import { Loading } from '@components/ui/Loading';
import { AUTH_KEY, clearStorage, getItem, setItem } from '@utils/Storage';
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import type { AuthTokenResponse } from '@/types/AuthTokenResponse';
import { type UserSummary, UserSummaryInitValue } from '@/types/UserSummary';

interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (tokenData: AuthTokenResponse) => Promise<void>;
  setAuthenticatedUser: Dispatch<SetStateAction<UserSummary>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  authenticatedUser: UserSummary;
  setLoading: Dispatch<SetStateAction<boolean>>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] =
    useState<UserSummary>(UserSummaryInitValue);
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
    await clearStorage();
    setAuthenticatedUser(UserSummaryInitValue);
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated,
    authenticatedUser,
    setIsAuthenticated,
    setAuthenticatedUser,
    setLoading,
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
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
