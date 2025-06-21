import * as Haptics from 'expo-haptics';
import React, {
  type ComponentProps,
  type ElementType,
  useMemo,
  useState,
} from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

type buttonSize = 'sm' | 'md' | 'lg';

type ButtonVariantType =
  | 'Primary'
  | 'Secondary'
  | 'Tertiary'
  | 'Danger'
  | 'Success'
  | undefined;

interface ButtonProps extends ComponentProps<typeof Pressable> {
  label: string;
  containerClassName?: string;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariantType;
  labelClassName?: string;
  size?: buttonSize;
  disabled?: boolean;
  buttonIcon?: ElementType;
  onPress: () => void;
}

// TODO: add dark mode style

const ButtonVariant = tv({
  slots: {
    container: 'relative w-full',
    pressable:
      'z-99 flex-row items-center  justify-center rounded-full border border-black  bg-primary-200 px-4',
    label: 'p-2  font-bold text-black ',
    shadow: 'absolute left-1.5 top-1.5 z-[-9999]  rounded-full  bg-black',
    indicator: 'text-black dark:text-white',
  },
  variants: {
    disabled: {
      true: {
        pressable: 'border-gray-400 bg-gray-300',
      },
    },
    isPressed: {
      true: {
        shadow: 'hidden',
      },
    },
    variant: {
      Primary: {
        pressable: 'border-black bg-primary-200',
      },
      Secondary: {
        pressable: 'bg-primary-300', // the bg-colors are still not defined in Colors.js
      },
      Tertiary: {
        pressable: 'bg-tertiary-200 border-gray-300', // the bg-colors are still not defined in Colors.js
      },
      Danger: {
        pressable: 'border-red-500 bg-red-200', // the bg-colors are still not defined in Colors.js
      },
      Success: {
        pressable: 'border-green-500 bg-green-200', // the bg-colors are still not defined in Colors.js
      },
    },
    size: {
      sm: {
        pressable: 'h-8 w-1/3',
        shadow: 'h-8 w-1/3 ',
        label: 'text-xs',
      },
      md: {
        pressable: 'h-10 w-1/2',
        shadow: 'h-10 w-1/2',
        label: 'text-sm',
      },
      lg: {
        pressable: 'h-16 w-full',
        shadow: 'h-16 w-full',
        label: 'font-bold',
      },
    },
  },
  defaultVariants: {
    variant: 'Primary',
    isPressed: false,
    disabled: false,
    size: 'md',
  },
});

export const Button = ({
  label,
  size = 'md',
  className = '',
  labelClassName = '',
  containerClassName = '',
  buttonIcon: ButtonIcon = undefined,
  onPress,
  disabled = false,
  isLoading = false,
  variant = disabled ? undefined : 'Primary',
  ...rest
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = useMemo(() => {
    return ButtonVariant({ size, variant, isPressed, disabled });
  }, [size, variant, isPressed, disabled]);

  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18;

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Pressable
        disabled={disabled || isLoading}
        onPressIn={() => {
          setIsPressed(true);
          process.env.EXPO_OS === 'ios' && Haptics.selectionAsync();
        }}
        onPressOut={() => setIsPressed(false)}
        accessible
        role="button"
        accessibilityRole="button"
        onPress={onPress}
        className={styles.pressable({ className })}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator className={styles.indicator()} size="small" />
        ) : (
          <>
            {label && (
              <Text className={styles.label({ className: labelClassName })}>
                {label}
              </Text>
            )}
            {ButtonIcon && <ButtonIcon height={iconSize} width={iconSize} />}
          </>
        )}
      </Pressable>

      <View className={styles.shadow({ className: containerClassName })} />
    </View>
  );
};
