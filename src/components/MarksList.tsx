import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';

import { type CursusProject } from '@/types/user/CursusProject';

import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { MarkCard } from './MarksCard';
import { AlertMessage } from './ui/AlertMessage';

interface MarksListProps {
  marks: CursusProject[];
}

export const MarksList = memo(({ marks }: MarksListProps) => {
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
          message="You have no marks yet."
        />
      }
      className="ios:my-auto flex-1 pt-4"
      estimatedItemSize={50}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      keyExtractor={(item) => item.id?.toString() ?? ''}
      renderItem={({ item }) => {
        return (
          <MarkCard
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
