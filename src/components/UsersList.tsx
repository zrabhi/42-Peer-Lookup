import { useGetUsers } from '@api/user/GetUsers';
import { FlashList } from '@shopify/flash-list';
import * as Haptics from 'expo-haptics';
import React, { useCallback } from 'react';
import { Platform, Pressable } from 'react-native';

import { ErrorOccurredIllustration } from './icons/ErrorOccurredIllustration';
import { NoResultIllustration } from './icons/NoResultIllustration';
import { AlertMessage } from './ui/EmptyList';
import { UserCard } from './UserCard';

export const UsersList = () => {
  const { data, error } = useGetUsers();

  const handleOnPress = useCallback(
    () => process.env.EXPO_OS === 'ios' && Haptics.selectionAsync(),
    []
  );

  if (error)
    return (
      <AlertMessage
        alertIcon={ErrorOccurredIllustration}
        message="Oops! Something went wrong."
      />
    );

  return (
    <FlashList
      data={data ?? []}
      ListEmptyComponent={
        <AlertMessage
          alertIcon={NoResultIllustration}
          message="Hmm... no matching users for now. "
        />
      }
      className="flex-1"
      keyExtractor={(item, index) => index.toString()}
      estimatedItemSize={150}
      contentContainerClassName={Platform.OS === 'ios' ? 'my-auto' : ''}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      renderItem={({ item: user }) => (
        <Pressable className="mb-10" onPress={handleOnPress}>
          <UserCard
            image={user.image.versions.medium}
            kind={user.kind}
            location={user.location}
            displayname={user.displayname}
          />
        </Pressable>
      )}
    />
  );
};
