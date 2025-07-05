import {
  Binoculars,
  CircleCheckBig,
  CircleDashed,
  XCircle,
} from 'lucide-react-native';
import { type ElementType } from 'react';

import { markStatus } from '@/types/user/CursusProject';

import Colors from './Colors';

interface MarkStatusMetadata {
  description: string;
  markIcon: (validated?: boolean) => ElementType;
  color: (validated?: boolean | null) => string;
}

export const markStateMetadata: Record<markStatus, MarkStatusMetadata> = {
  [markStatus.IN_PROGRESS]: {
    description: 'This project is currently being worked on.',
    markIcon: () => CircleDashed,
    color: () => Colors.primary.green[100],
  },
  [markStatus.SEARCHING_A_GROUP]: {
    description: 'This project is currently looking for a group.',
    markIcon: () => Binoculars,
    color: () => Colors.primary.green[100],
  },
  [markStatus.FINISHED]: {
    description: 'This project has been completed.',
    markIcon: (validated = false) => (validated ? CircleCheckBig : XCircle),
    color: (validated = false) =>
      validated ? Colors.primary.green[200] : Colors.primary.orange[50],
  },
};
