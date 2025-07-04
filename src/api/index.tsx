import NetInfo from '@react-native-community/netinfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { onlineManager } from '@tanstack/react-query';
import * as React from 'react';

import { ToastType } from '@/types/ToastType';
import { openToaster } from '@/utils/Helpers';

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      throwOnError(_error, _query) {
        openToaster(ToastType.ERROR, 'Something went wrong');
        console.log('errrror', _error);
        return true;
      },
    },
    mutations: {
      onError: (error) => {
        openToaster(ToastType.ERROR, 'Something went wrong');
        console.error('Global mutation error handler:', error);
      },
    },
  },
});
export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
