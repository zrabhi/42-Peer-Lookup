import { Image as NImage, type ImageProps } from 'expo-image';
import React from 'react';

interface NImageProps extends ImageProps {
  imageSource?: string | number;
  width?: number;
  borderRadius?: number;
  height?: number;
}

export const Image = ({
  imageSource,
  width = 64,
  height = 64,
  borderRadius = 36,
  ...rest
}: NImageProps) => {
  return (
    <NImage
      source={imageSource ?? require('@assets/images/avatars/avatar@2.png')}
      style={{ width, height, borderRadius }}
      {...rest}
    />
  );
};
