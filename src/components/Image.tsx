import { Image } from 'expo-image';
import React from 'react';

interface NImageProps {
  imageSource?: string | number;
  width?: number;
  height?: number;
}

export const NImage = ({
  imageSource,
  width = 64,
  height = 64,
}: NImageProps) => {
  return (
    <Image
      source={imageSource ?? require('@assets/images/avatars/avatar@1.png')}
      style={{ width, height, borderRadius: 36 }}
    />
  );
};
