import { View ,Text} from 'react-native';

export default function HomeScreen() {
  return (
    <View
     className='flex-1 items-center gap-5 justify-center px-6'>
    <Text className="font-light text-lg">Light (LexendMega_300Light)</Text>
    <Text className="font-bold text-xl">Bold (LexendMega_700Bold)</Text>
    <Text className="font-black text-2xl">Black (LexendMega_900Black)</Text>
    </View>
  );
}
