import { useCallback } from 'react';
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export const useHaptics = () => {
 
    const triggerSelection = useCallback(() => {
    if (Platform.OS === 'ios') {
      Haptics.selectionAsync();
    }
  }, []);

  const triggerImpact = useCallback(
    (
      style: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Medium
    ) => {
      if (Platform.OS === 'ios') {
        Haptics.impactAsync(style);
      }
    },
    []
  );

  const triggerNotification = useCallback(
    (
      type: Haptics.NotificationFeedbackType = Haptics.NotificationFeedbackType
        .Success
    ) => {
      if (Platform.OS === 'ios') {
        Haptics.notificationAsync(type);
      }
    },
    []
  );

  return {
    triggerSelection,
    triggerImpact,
    triggerNotification,
  };
};
