import * as Haptics from 'expo-haptics';
import { CircleCheckBig } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { type BaseToastProps } from 'react-native-toast-message';
export const toasterConfig = {
  error: (props: BaseToastProps) => (
    <View className="relative h-24 w-[80%] items-center ">
      <Pressable
        accessible
        accessibilityRole="button"
        onPressIn={() => {
          if (process.env.EXPO_OS === 'ios') Haptics.selectionAsync();
        }}
        className="z-99 bg-primary-100 flex-1 flex-row items-center  gap-5 rounded-[32px] border  border-black   px-4"
      >
        <CircleCheckBig strokeWidth={2.5} size={34} />
        <View className="flex-1 gap-1">
          <Text className="font-bold text-black">Error</Text>
          <Text className="font-medium text-black">{props.text2}</Text>
        </View>
      </Pressable>
      <View className="absolute left-1.5 top-1.5 z-[-9999] h-full w-full  rounded-[32px]  bg-black" />
    </View>
  ),
  success: (props: BaseToastProps) => (
    <View className="relative h-24 w-[80%] items-center">
      <Pressable
        accessible
        accessibilityRole="button"
        onPressIn={() => {
          if (process.env.EXPO_OS === 'ios') Haptics.selectionAsync();
        }}
        className="z-99 flex-1 flex-row items-center gap-5  rounded-[32px] border border-black  bg-primary-200   px-4"
      >
        <CircleCheckBig strokeWidth={2.5} size={34} />
        <View className="flex-1 gap-1">
          <Text className="font-bold text-black">Success</Text>
          <Text className="font-medium text-black">{props.text2}</Text>
        </View>
      </Pressable>
      <View className="absolute left-1.5 top-1.5 z-[-9999] h-full w-full  rounded-[32px]  bg-black" />
    </View>
  ),
};
