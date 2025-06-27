import { Image, type ImageProps } from 'expo-image';
import React from 'react';

interface NImageProps extends ImageProps {
  imageSource?: string | number;
  width?: number;
  borderRadius?: number;
  height?: number;
}

export const NImage = ({
  imageSource,
  width = 64,
  height = 64,
  borderRadius = 36,
  ...rest
}: NImageProps) => {
  return (
    <Image
      source={imageSource ?? require('@assets/images/avatars/avatar@1.png')}
      style={{ width, height, borderRadius }}
      {...rest}
    />
  );
};
