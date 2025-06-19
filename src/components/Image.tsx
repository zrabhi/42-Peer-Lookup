import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import Svg, { Path } from 'react-native-svg';

interface NImageProps {
  imageSource?: string | number; // string for remote URI, number for local require
  className?: string; // NativeWind classes for styling the container
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export const NImage = ({
  imageSource,
  className = '',
  width = 74,
  height = 74,
  strokeColor = 'black',
  strokeWidth = 5,
}: NImageProps) => {
  return (
    <View
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        source={imageSource ?? require('@assets/images/avatars/avatar@1.png')}
        className="w-full h-full"
         style={{ width, height }}
        contentFit="cover"
      />

      <Svg
        width={width + 15}
        height={height + 15}
        viewBox="0 0 1300 1300"
        fill="none"
        className="absolute top-0 left-0"
      >
        <Path
          d="M1224.38 358.137C1482.25 854.771 1028.95 1415.13 488.562 1278.33C245.98 1218.01 50.9803 1007.71 10.6208 760.882C-35.2615 515.327 75.6208 251.503 282.941 112.582C567.157 -82.8433 960.98 -17.8433 1164.48 261.699C1165.75 262.974 1165.33 265.098 1163.63 266.372C1162.35 267.647 1160.23 267.222 1158.95 265.523C1130.91 229.412 1099.05 196.699 1064.22 167.385C1006.86 118.529 939.738 80.2939 868.791 54.3789C507.68 -76.4708 111.307 141.046 32.2875 518.725C-56.9282 941.863 302.908 1331.44 731.993 1273.24C1062.94 1231.6 1308.92 926.144 1281.73 593.921C1275.78 513.627 1254.54 434.183 1219.28 361.111C1218.43 359.836 1219.28 358.137 1220.56 357.287C1221.83 356.438 1223.53 356.863 1224.38 358.137Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
    </View>
  );
};
