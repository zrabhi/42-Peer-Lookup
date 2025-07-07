import {
  Binoculars,
  CircleCheckBig,
  CircleDashed,
  ClockFading,
  XCircle,
} from 'lucide-react-native';

import { type Metadata } from '@/types/Metadata';
import { markStatus } from '@/types/user/CursusProject';

import Colors from './Colors';

export const markStateMetadata: Record<markStatus, Metadata> = {
  [markStatus.IN_PROGRESS]: {
    description: 'This project is currently being worked on.',
    Icon: () => CircleDashed,
    color: () => Colors.primary.green[100],
  },
  [markStatus.SEARCHING_A_GROUP]: {
    description: 'This project is currently looking for a group.',
    Icon: () => Binoculars,
    color: () => Colors.primary.green[100],
  },
  [markStatus.WAITING_FOR_CORRESTION]: {
    description: '',
    Icon: () => ClockFading,
    color: () => Colors.primary[200],
  },
  [markStatus.FINISHED]: {
    description: 'This project has been completed.',
    Icon: (validated = false) => (validated ? CircleCheckBig : XCircle),
    color: (validated = false) =>
      validated ? Colors.primary.green[200] : Colors.primary.orange[50],
  },
};
