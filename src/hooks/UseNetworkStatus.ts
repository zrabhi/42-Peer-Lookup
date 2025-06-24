import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

// This hook checks the network status.
// If there is no network, an alert message can be rendered (optionally with a refresh button).
export const useNetworkConnectivity = () => {
  const [isNetworkConnected, setIsNetworkConnected] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsNetworkConnected(
        state.isInternetReachable ?? state.isConnected ?? false
      );
    });

    return () => unsubscribe();
  }, []);

  return isNetworkConnected;
};
