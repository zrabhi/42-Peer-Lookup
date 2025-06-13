import { Text, View } from 'react-native';
import { type BaseToastProps } from 'react-native-toast-message';

export const toasterConfig = {
  ErrorToast: (props: BaseToastProps) => (
    <View className="flex-1 ">
      <Text className="font-bold text-black">{props.text1 || 'Success'}</Text>
    </View>
  ),
};
