import { X } from 'lucide-react-native';
import { type ElementType, useCallback, useMemo, useState } from 'react';
import {
  Keyboard,
  Pressable,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { tv } from 'tailwind-variants';

import Colors from '@/utils/Colors';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  label?: string;
  value?: string;
  textSize?: number;
  className?: string;
  inputIcon?: ElementType;
}

const InputVariants = tv({
  slots: {
    container:
      'relative h-16  w-full overflow-visible  rounded-2xl border bg-white',
    inputContainer: 'flex-1 flex-row  items-center justify-between px-6',
    label: 'font-medium text-gray-100',
    input: 'flex-1 bg-white pl-4 pr-6 font-medium text-gray-100',
    shadow:
      'absolute left-1.5 top-1.5 z-[-9999] size-full rounded-2xl bg-black',
  },
  variants: {
    disabled: {
      true: {
        container: 'border-gray-200 bg-gray-50',
        input: 'text-gray-300',
      },
    },
    focus: {
      true: {
        container: ' border-2 border-dashed border-primary-orange-100 ',
        shadow: 'hidden',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    focus: false,
  },
});
// todo : To fix re-rendering issue in this component
// PROBLEM: the problem when the local start isFocus updated , it trigers the USeMemo to recalculate , thats when the problem occures , i get navigation problem
export const Input = ({
  inputIcon: InputIcon = undefined,
  disabled = false,
  textSize = 12,
  className = '',
  value = '',
  ...rest
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const style = useMemo(() => InputVariants({ disabled }), [disabled, isFocus]);

  const handleOnFocus = useCallback(() => setIsFocus(true), []);

  const handleClearInput = useCallback(() => {
    rest.onChangeText(''), Keyboard.dismiss();
  }, []);

  const handleOnBlur = useCallback(() => setIsFocus(false), []);
  return (
    <View className={style.container({ className, focus: isFocus })}>
      <View className={style.inputContainer()}>
        <TextInput
          style={{
            fontSize: moderateScale(textSize),
          }}
          value={value}
          placeholderTextColor={Colors.gray[100]}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          className={style.input()}
          editable={!disabled}
          {...rest}
        />
        {InputIcon &&
          (value.length === 0 ? (
            <InputIcon
              strokeWidth={2.5}
              size={moderateScale(20)}
              color={Colors.primary.orange[100]}
            />
          ) : (
            <Pressable onPress={handleClearInput}>
              <X
                strokeWidth={2.5}
                size={moderateScale(20)}
                color={Colors.primary.orange[100]}
              />
            </Pressable>
          ))}
      </View>
      <View className={style.shadow({ focus: isFocus })} />
    </View>
  );
};
