import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { FortyTwoIcon } from '@/components/icons/FortyTwoIcon';
import { FortyTwoLogo } from '@/components/icons/FortyTwoLogo';
import { Button } from '@/components/ui/Button';

export default function AuthScreen() {
  // TODO: Implement 42 OAuth Logic when the user presses the login button
  return (
    <SafeAreaView className="flex-1 items-center  justify-between bg-peach ">
      <View className="flex items-center gap-6 pt-28 ">
        <FortyTwoLogo />
        <Text className="font-bold text-3xl">Welcome!</Text>
        <View className="">
          <Text className="text- pt-1 text-center font-medium text-xl">
            Discover your
            <Text>
              {' '}
              <Text className="text-primary-100">peers</Text>
            </Text>{' '}
            and view their profiles.
          </Text>
        </View>
      </View>
      <View className="w-full px-10 pb-6">
        <Button
          label="Login with "
          size="lg"
          buttonIcon={FortyTwoIcon}
          onPress={() => {
            // Handle login logic here
            console.log('Login button pressed');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
