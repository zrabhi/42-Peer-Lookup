import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

interface LoadingProps {
  className?: string;
}
export const Loading = ({ className = '' }: LoadingProps) => {
  return (
    <View
      className={`flex-1 items-center justify-center bg-peach ${className}`}
    >
      <LottieView
        autoPlay
        style={{
          width: 400,
          height: 200,
        }}
        source={require('@assets/Loader.json')}
      />
    </View>
  );
};
