import { Env } from '@utils/Env';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { apiUrls } from '@/api/Common';
import { FortyTwoIcon } from '@/components/icons/FortyTwoIcon';
import { FortyTwoLogo } from '@/components/icons/FortyTwoLogo';
import { Button } from '@/components/ui/Button';

const discovery = {
  authorizationEndpoint: Env.API_URL + apiUrls.oauth,
};

export default function AuthScreen() {
  console.log(
    makeRedirectUri({
      scheme: '42peerlookup',
    })
  );
 /*
 } const [response, promptAsync] = useAuthRequest(
  {
      clientId: Env.CLIENT_UID,
      scopes: ['public', 'profile'],
      redirectUri: makeRedirectUri({
        scheme: '42peerlookup',
      }),
    },
    discovery
  );
  console.log(response);
  */

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
          onPress={async () => {
            //     await promptAsync();
            // Handle login logic here
            console.log('Login button pressed');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
