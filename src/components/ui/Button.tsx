import * as Haptics from 'expo-haptics';
import React, {
  type ComponentProps,
  type ElementType,
  useMemo,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { tv } from 'tailwind-variants';

type buttonSize = 'sm' | 'md' | 'lg';

type ButtonVariantType =
  | 'Primary'
  | 'Secondary'
  | 'Tertiary'
  | 'Danger'
  | 'Success'
  | undefined;

type ButtonShapeType = 'rounded' | 'square';
interface ButtonProps extends ComponentProps<typeof Pressable> {
  label?: string;
  isIcon?: boolean;
  containerClassName?: string;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariantType;
  labelClassName?: string;
  size?: buttonSize;
  textSize?: number;
  shape?: ButtonShapeType;
  disabled?: boolean;
  buttonIcon?: ElementType;
  onPress: () => void;
}

// TODO: add dark mode style

const ButtonVariant = tv({
  slots: {
    container: '',
    pressable:
      'z-[99999] flex-row items-center  justify-center rounded-full border border-black  bg-primary-250 px-4',
    label: 'p-2  font-bold text-black ',
    shadow: '-z-99 absolute left-1.5 top-1.5   rounded-full  bg-black',
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
    shape: {
      rounded: {
        pressable: 'rounded-full',
        shadow: 'rounded-full',
      },
      square: {
        pressable: 'rounded',
        shadow: 'rounded',
      },
    },
    isIcon: {
      true: {
        pressable: 'h-12 w-12 border-2',
        label: 'hidden',
        shadow: 'h-12 w-12',
      },
    },
    variant: {
      Primary: {
        pressable: 'border-black bg-primary-250',
      },
      Secondary: {
        pressable: 'bg-primary-300', // the bg-colors are still not defined in Colors.js
      },
      Tertiary: {
        pressable: 'bg-tertiary-200 border-gray-300', // the bg-colors are still not defined in Colors.js
      },
      Danger: {
        pressable: 'bg-primary-orange-100', // the bg-colors are still not defined in Colors.js
      },
      Success: {
        pressable: 'border-green-500 bg-primary-green-200', // the bg-colors are still not defined in Colors.js
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
    isIcon: false,
    shape: 'rounded',
    variant: 'Primary',
    isPressed: false,
    disabled: false,
    size: undefined,
  },
});

export const Button = ({
  label = undefined,
  isIcon = false,
  size = isIcon ? undefined : 'md',
  shape = 'rounded',
  disabled = false,
  isLoading = false,
  buttonIcon: ButtonIcon = undefined,
  variant = disabled ? undefined : 'Primary',
  className = '',
  labelClassName = '',
  containerClassName = '',
  onPress,
  ...rest
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = useMemo(() => {
    return ButtonVariant({ size, shape, variant, isIcon, isPressed, disabled });
  }, [size, variant, isPressed, disabled, shape, isIcon]);

  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18;

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Pressable
        disabled={disabled || isLoading}
        onPressIn={() => {
          setIsPressed(true);
          Platform.OS === 'ios' && Haptics.selectionAsync();
        }}
        onPressOut={() => setIsPressed(false)}
        accessible
        role="button"
        accessibilityState={{
          disabled: disabled || isLoading,
          busy: isLoading,
        }}
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
            {ButtonIcon && (
              <ButtonIcon
                strokeWidth={2.5}
                height={iconSize}
                width={iconSize}
              />
            )}
          </>
        )}
      </Pressable>
      <View className={styles.shadow({ className: containerClassName })} />
    </View>
  );
};
