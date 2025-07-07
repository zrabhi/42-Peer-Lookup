import { Metadata } from '@/types/Metadata';
import {
  Brain,
  Image,
  Briefcase,
  Code,
  Globe,
  Network,
  ScanLine,
  Settings,
  TerminalSquare,
  Users,
} from 'lucide-react-native';

export const skillsStateMetadata: Record<string, Metadata> = {
  'Company experience': {
    Icon: () => Briefcase,
    color: () => '#FF7A5C',
  },
  Rigor: {
    Icon: () => Brain,
    color: () => '#B5D2AD',
  },
  'Network & system administration': {
    Icon: () => Network,
    color: () => '#7FBC8C',
  },
  'Group & interpersonal': {
    Icon: () => Users,
    color: () => '#FFD166',
  },
  Web: {
    Icon: () => Globe,
    color: () => '#F3A683',
  },
  'Object-oriented programming': {
    Icon: () => Code,
    color: () => '#A29BFE',
  },
  'Imperative programming': {
    Icon: () => Settings,
    color: () => '#81ECEC',
  },
  Unix: {
    Icon: () => TerminalSquare,
    color: () => '#636E72',
  },
  'Algorithms & AI': {
    Icon: () => ScanLine,
    color: () => '#F8B195',
  },
  Graphics: {
    Icon: () => Image,
    color: () => '#FFB6B9',
  },
};
