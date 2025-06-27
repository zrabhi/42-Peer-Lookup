import { useAuth } from '@utils/auth/AuthProvider';
import { Redirect } from 'expo-router';
import React, { type ReactNode } from 'react';

interface ProtectedRoutesProps {
  children: ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.log('User is not authenticated, redirecting to auth page');
    return <Redirect href={'/(auth)'} />;
  }
  return children;
};
