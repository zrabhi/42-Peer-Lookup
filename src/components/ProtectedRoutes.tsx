import { Stack } from 'expo-router';
import { type ReactNode } from 'react';

import { useAuth } from '@/utils/auth/AuthProvider';

import { Loading } from './ui/Loading';

interface ProtectedRoutesProps {
  children: ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <Loading />;

  if (!isAuthenticated) {
    console.log('i  here');
    return <Stack.Screen name="(auth)" options={{ headerShown: false }} />;
  }

  return children;
};
