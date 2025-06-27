import React, { useMemo } from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { StyleSheet, Text as NNText } from 'react-native';
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
    () => twMerge('text-black  dark:text-white  font-normal', className),
    [className]
  );

  const nStyle: TextStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontSize: moderateScale(textSize),
        },

        style,
      ]),
    [style, textSize]
  );
  return (
    <NNText className={textStyle} style={nStyle} {...rest}>
      {tx ?? children}
    </NNText>
  );
};
