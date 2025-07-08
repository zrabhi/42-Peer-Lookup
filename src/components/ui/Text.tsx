import React, { useMemo } from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { Platform, StyleSheet, Text as NNText } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { twMerge } from 'tailwind-merge';

interface Props extends TextProps {
  className?: string;
  tx?: string;
  textSize?: number;
}

export const Text = ({
  className = '',
  style,
  tx,
  children,
  textSize = 12,
  ...rest
}: Props) => {
  const textStyle = useMemo(
    () => twMerge('text-black   font-normal', className),
    [className]
  );

  const nStyle: TextStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontSize: moderateScale(
            textSize,
            Platform.OS === 'android' ? 0.8 : 0.3
          ),
        },

        style,
      ]),
    [style, textSize]
  );
  return (
    <NNText
      allowFontScaling={false}
      className={textStyle}
      style={nStyle}
      {...rest}
    >
      {tx ?? children}
    </NNText>
  );
};
