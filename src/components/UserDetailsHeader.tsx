import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { NImage } from './Image';
import { NeoBruteView } from './ui/NeoBruteView';

interface UserDetailsHeaderProps {
  coalitionBackground: string;
  userImage: string;
}

export const UserDetailsHeader = memo(
  ({ coalitionBackground, userImage }: UserDetailsHeaderProps) => {
   
    return (
      <View className="h-64 w-full border-b-2  border-black">
        <NImage
          style={styles.container}
          imageSource={
            coalitionBackground ?? require('@assets/images/bkgrnd.jpg')
          }
        />
        <NeoBruteView className="absolute -bottom-12 left-[36%] size-36 flex-row items-center justify-center rounded-3xl  bg-none">
          <NImage style={styles.avatarImage} imageSource={userImage} />
        </NeoBruteView>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    width: 122,
    height: 122,
    borderRadius: 15,
  },
});
