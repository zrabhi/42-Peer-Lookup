import { Text } from '@components/ui/Text';
import { type Dispatch, memo, type SetStateAction } from 'react';
import { Pressable } from 'react-native';
import { tv } from 'tailwind-variants';

import { type NavigationSectionsType } from '@/types/NavigationSectionsType';

import { NeoBruteView } from './NeoBruteView';

interface NavigationBarProps<T> {
  section: T;
  onChangeSection: Dispatch<SetStateAction<T>>;
  navigationSections: NavigationSectionsType<T>[];
}

const NavigationTv = tv({
  slots: {
    tab: ' flex-1 items-center justify-center rounded-lg py-3.5',
    label: 'font-semibold',
  },
  variants: {
    isCurrent: {
      true: {
        tab: ' border-2 border-dashed border-black  bg-primary-200',
        label: 'text-black ',
      },
    },
    isActive: {
      false: {
        tab: 'border-none opacity-50',
        label: 'text-gray-400',
      },
    },
  },
});

export const NavigationBar = memo(
  <T extends string>({
    section,
    onChangeSection,
    navigationSections,
  }: NavigationBarProps<T>) => {
    return (
      <NeoBruteView className="flex-row justify-between rounded-xl p-2">
        {navigationSections.map(
          ({
            section: navigationSection,
            label: tabLabel,
            isActive = true,
          }) => {
            const isCurrent = section === navigationSection;
            const { tab, label } = NavigationTv({ isCurrent, isActive });

            return (
              <Pressable
                accessibilityRole="button"
                key={String(navigationSection)}
                disabled={!isActive}
                className={tab()}
                onPress={() => onChangeSection(navigationSection)}
              >
                <Text textSize={9} className={label()}>
                  {tabLabel}
                </Text>
              </Pressable>
            );
          }
        )}
      </NeoBruteView>
    );
  }
);
