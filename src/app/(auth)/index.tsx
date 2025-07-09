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

import { AccessTokenGranType } from '@/api/types/AcessTokenGrantTYpe';
import { ScribbleLine } from '@/components/icons/ScribblleLine';
import { BounceWrapper } from '@/components/ui/BounceWrapper';
import { ToastType } from '@/types/ToastType';
import { openToaster } from '@/utils/Helpers';

const discovery = {
  authorizationEndpoint: Env.API_URL + apiUrls.oauth,
};

const AuthenticationHeader = memo(() => {
  return (
    <View className="w-full items-center justify-center gap-6 pt-28 ">
      <BounceWrapper bounceHeight={9}>
        <FortyTwoLogo />
      </BounceWrapper>
      <View className="w-full">
        <ScribbleLine width="100%" />
      </View>
      <Text textSize={26} className="font-bold text-black">
        Welcome!
      </Text>
      <Text
        textSize={16}
        className="android:px-4 ios:px-1 pt-1 text-center font-medium text-black"
      >
        Discover your
        <Text>
          {' '}
          <Text textSize={17} className="font-semibold text-primary-orange-100">
            peers
          </Text>
        </Text>{' '}
        and view their profiles.
      </Text>
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
        native: Env.REDIRECT_URL,
        scheme: Env.SCHEME,
      }),
    },
    discovery
  );

  const handleAuthCode = useCallback(async () => {
    if (response?.type === 'success' && response.params?.code) {
      await getAccessToken({
        code: response.params.code,
        grantType: AccessTokenGranType.AUTORIZATION_CODE,
      });
      openToaster(ToastType.SUCCESS, 'Login successful! Welcome 🕹️');
      router.replace('/(protected)/users');
    }
  }, [response, getAccessToken]);

  useEffect(() => {
    handleAuthCode();
  }, [handleAuthCode]);

  const handleOnpress = useCallback(async () => {
    await promptAsync();
  }, [promptAsync]);

  return (
    <SafeAreaView className="android:py-16 w-full flex-1 items-center  justify-between bg-peach ">
      <AuthenticationHeader />
      <View className="w-full  px-10 pb-6">
        <Button
          isLoading={isPending || !request}
          label="Login with "
          size="lg"
          buttonIcon={FortyTwoIcon}
          onPress={async () => await handleOnpress()}
        />
      </View>
    </SafeAreaView>
  );
}
