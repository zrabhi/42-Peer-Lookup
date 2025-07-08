import * as Haptics from 'expo-haptics';
import { CircleCheckBig } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { type BaseToastProps } from 'react-native-toast-message';
export const toasterConfig = {
  error: (props: BaseToastProps) => (
    <View className="android:pt-10 ios:pt-4 relative h-24 w-[90%] items-center ">
      <Pressable
        accessible
        accessibilityRole="button"
        onPressIn={() => {
          if (process.env.EXPO_OS === 'ios') Haptics.selectionAsync();
        }}
        className="z-99 flex-1 flex-row items-center gap-5  rounded-3xl border-2  border-dashed border-black   bg-primary-orange-100   px-4"
      >
        <CircleCheckBig strokeWidth={2.5} size={34} />
        <View className="flex-1 gap-1">
          <Text className="font-bold text-black">Error</Text>
          <Text className="font-medium text-black">{props.text2}</Text>
        </View>
      </Pressable>
    </View>
  ),
  success: (props: BaseToastProps) => (
    <View className="android:pt-10 ios:pt-4 relative h-24 w-[90%] items-center">
      <Pressable
        accessible
        accessibilityRole="button"
        onPressIn={() => {
          if (process.env.EXPO_OS === 'ios') Haptics.selectionAsync();
        }}
        className="z-99 flex-1 flex-row items-center gap-5  rounded-3xl border-2 border-dashed border-black  bg-primary-green-200   px-4"
      >
        <CircleCheckBig strokeWidth={2.5} size={34} />
        <View className="flex-1 gap-1">
          <Text className="font-bold text-black">Success</Text>
          <Text className="font-medium text-black">{props.text2}</Text>
        </View>
      </Pressable>
    </View>
  ),
};
