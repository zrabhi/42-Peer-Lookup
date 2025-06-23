import { useGetAccessToken } from '@api/auth/GetAccessToken';
import { apiUrls } from '@api/Common';
import { FortyTwoIcon } from '@components/icons/FortyTwoIcon';
import { FortyTwoLogo } from '@components/icons/FortyTwoLogo';
import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { Env } from '@utils/Env';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { router } from 'expo-router';
import React, { memo, useCallback, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

const discovery = {
  authorizationEndpoint: Env.API_URL + apiUrls.oauth,
};

const AuthenticationHeader = memo(() => {
  return (
    <View className="flex items-center gap-6 pt-28 ">
      <FortyTwoLogo />
      <Text textSize={28} className="font-bold">
        Welcome!
      </Text>
      <View className="">
        <Text textSize={18} className="text- pt-1 text-center font-medium">
          Discover your
          <Text>
            {' '}
            <Text textSize={18} className="text-primary-100">
              peers
            </Text>
          </Text>{' '}
          and view their profiles.
        </Text>
      </View>
    </View>
  );
});

export default function AuthScreen() {
  const { getAccessToken, isPending } = useGetAccessToken();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: Env.CLIENT_UID,
      scopes: ['public', 'profile'],
      redirectUri: makeRedirectUri({
        scheme: '42peerlookup',
      }),
    },
    discovery
  );

  const handleAuthCode = useCallback(async () => {
    if (response?.type === 'success' && response.params?.code) {
      await getAccessToken({ code: response.params.code });

      // openToaster(ToastType.SUCCESS, 'You’re all set 🎉');
      // to investigate: when rendering the toater and attempting to navigate , a rendering error get throwed
      router.push('/(tabs)/users');
    }
  }, [response]);

  useEffect(() => {
    handleAuthCode();
  }, [handleAuthCode]);

  const handleOnpress = useCallback(async () => {
    await promptAsync();
  }, [promptAsync]);

  return (
    <SafeAreaView className="flex-1 items-center  justify-between bg-peach ">
      <AuthenticationHeader />
      <View className="w-full px-10 pb-6">
        <Button
          isLoading={isPending || !request} // to change
          label="Login with "
          size="lg"
          buttonIcon={FortyTwoIcon}
          onPress={async () => await handleOnpress()}
        />
      </View>
    </SafeAreaView>
  );
}
