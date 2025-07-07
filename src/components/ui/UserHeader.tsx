import { Text } from '@components/ui/Text';
import { router } from 'expo-router';
import { Settings } from 'lucide-react-native';
import { memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { useHaptics } from '@/hooks/UseHaptics';
import { useAuth } from '@/utils/auth/AuthProvider';
import Colors from '@/utils/Colors';

import { Button } from './Button';
import { HighlightedText } from './HighlightedText';
import { Image } from './Image';

interface UserHeaderProps {
  className?: string;
}

export const UserHeader = memo(({ className = '' }: UserHeaderProps) => {
  const { authenticatedUser } = useAuth();
  const { triggerImpact, triggerSelection } = useHaptics();

  const style = useMemo(
    () => twMerge('flex-row items-center justify-between', className),
    [className]
  );

  const handleOnPress = useCallback(() => {
    triggerImpact(), router.push('/settings');
  }, [triggerImpact]);

  const handleOnPressProfile = useCallback(() => {
    triggerSelection();
    router.push(`/users/${authenticatedUser.id}`);
  }, [authenticatedUser.id, triggerImpact]);

  return (
    <View className={style}>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center gap-4"
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Go to profile of ${authenticatedUser.first_name ?? authenticatedUser.login}`}
        onPress={handleOnPressProfile}
      >
        <View
          style={{
            borderColor:
              authenticatedUser.coalition_color ?? Colors.primary.orange[100],
          }}
          className="rounded-full border-2 border-dashed bg-white"
        >
          <Image
            width={64}
            height={64}
            imageSource={authenticatedUser.image_url}
          />
        </View>
        <View className="items-start justify-center">
          <View className="flex-row flex-wrap items-center">
            <Text className="font-semibold" textSize={14}>
              Hola,{' '}
            </Text>
            <HighlightedText className="mx-1">
              <Text className="font-extrabold" textSize={14}>
                {authenticatedUser.first_name ?? ''}!
              </Text>
            </HighlightedText>
          </View>

          <Text className="font-medium  text-sm text-gray-100">
            @{authenticatedUser.login}
          </Text>
          <View className="flex-row items-center gap-2">
            <Image
              source={authenticatedUser.coalition_icon}
              tintColor={authenticatedUser.coalition_color}
              style={{ width: 14, height: 22 }}
            />
            <Text
              style={{
                color: authenticatedUser.coalition_color ?? Colors.gray[100],
              }}
              className="font-normal text-sm "
            >
              {authenticatedUser.coalition_name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View className="pr-1">
        <Button onPress={handleOnPress} buttonIcon={Settings} isIcon />
      </View>
    </View>
  );
});
