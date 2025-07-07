import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';

import { useGetEmptyMessage } from '@/hooks/UseGetEmptyMessage';
import { type CursusProject } from '@/types/user/CursusProject';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';

import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { MarkCard } from './MarksCard';
import { AlertMessage } from './ui/AlertMessage';

interface MarksListProps {
  marks: CursusProject[];
  userLogin: string;
}

export const MarksList = memo(({ marks, userLogin }: MarksListProps) => {
  const emptyMarksMessage = useGetEmptyMessage(
    UserDetailsSections.MARKS,
    userLogin
  );

  return (
    <FlashList
      data={marks}
      ListEmptyComponent={
        <AlertMessage
          width={128}
          height={128}
          textSize={14}
          className="gap-6"
          alertIcon={NoItemIllustartion}
          message={emptyMarksMessage}
        />
      }
      className="ios:py-auto flex-1 pt-4"
      estimatedItemSize={50}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      keyExtractor={(item) => item.id?.toString() ?? ''}
      renderItem={({ item }) => {
        return (
          <MarkCard
            date={item.updated_at}
            finalMark={item.final_mark}
            name={item.project.name}
            status={item.status}
            validated={item['validated?']}
          />
        );
      }}
    />
  );
});
