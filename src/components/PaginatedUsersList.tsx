import { useGetPaginatedUsers } from '@api/user/GetUsers';
import { FlashList } from '@shopify/flash-list';
import Colors from '@utils/Colors';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import React, { useCallback } from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

import { ErrorOccurredIllustration } from './icons/ErrorOccurredIllustration';
import { NoResultIllustration } from './icons/NoResultIllustration';
import { AlertMessage } from './ui/AlertMessage';
import { Loading } from './ui/Loading';
import { UserCard } from './UserCard';

interface UsersListProps {
  searchedUser?: string;
  onScroll?: (...args: any[]) => void;
}

export const PaginatedUsersList = ({ searchedUser }: UsersListProps) => {
  const { users, error, invalidate, isFetchingNextPage, isLoading, loadMore } =
    useGetPaginatedUsers(searchedUser);

  const handleOnPress = useCallback((userId: string) => {
    process.env.EXPO_OS === 'ios' && Haptics.selectionAsync(),
      router.push({
        pathname: '/users/[id]',
        params: { id: userId },
      });
  }, []);

  if (error)
    return (
      <AlertMessage
        alertIcon={ErrorOccurredIllustration}
        message="Oops! Something went wrong."
      />
    );

  if (isLoading) return <Loading />;

  return (
    <FlashList
      data={users}
      ListEmptyComponent={
        !isLoading ? (
          <AlertMessage
            alertIcon={NoResultIllustration}
            message={
              searchedUser
                ? `Hmm... no matching users for "${searchedUser}" `
                : 'Hmm... no users available at the moment. '
            }
          />
        ) : undefined
      }
      /*onScroll={onScroll}*/
      showsVerticalScrollIndicator={false}
      className="flex-1 pt-4"
      keyExtractor={(_item, index) => index.toString()}
      refreshControl={
        <RefreshControl
          tintColor={Colors.primary[100]}
          refreshing={isLoading}
          onRefresh={invalidate}
        />
      }
      estimatedItemSize={150}
      onEndReached={loadMore}
      ListFooterComponent={
        isFetchingNextPage ? (
          <ActivityIndicator
            color={Colors.primary[100]}
            size="small"
            className="ios:mb-10 android:pb-10"
          />
        ) : undefined
      }
      contentContainerStyle={{ paddingHorizontal: 24 }}
      renderItem={({ item: user }) => (
        <UserCard
          {...user}
          className="mb-10"
          onPress={() => handleOnPress(user.id.toString())}
          image={user.image.versions.medium}
        />
      )}
    />
  );
};
