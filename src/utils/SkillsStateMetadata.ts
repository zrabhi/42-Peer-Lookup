import {
  Brain,
  Briefcase,
  Code,
  Globe,
  HelpCircle,
  Image,
  Network,
  ScanLine,
  Settings,
  TerminalSquare,
  Users,
} from 'lucide-react-native';

import { type Metadata } from '@/types/Metadata';
import { SkillsType } from '@/types/SkillsType';

export const skillsStateMetadata: Record<SkillsType, Metadata> = {
  [SkillsType.COMPANY_EXPERIENCE]: {
    Icon: () => Briefcase,
    color: () => '#FF7A5C',
  },
  [SkillsType.RIGOR]: {
    Icon: () => Brain,
    color: () => '#B5D2AD',
  },
  [SkillsType.NETWORK_SYSTEM_ADMINISTRATION]: {
    Icon: () => Network,
    color: () => '#7FBC8C',
  },
  [SkillsType.GROUP_INTERPERSONAL]: {
    Icon: () => Users,
    color: () => '#FFD166',
  },
  [SkillsType.WEB]: {
    Icon: () => Globe,
    color: () => '#F3A683',
  },
  [SkillsType.OBJECT_ORIENTED_PROGRAMMING]: {
    Icon: () => Code,
    color: () => '#A29BFE',
  },
  [SkillsType.IMPERATIVE_PROGRAMMING]: {
    Icon: () => Settings,
    color: () => '#81ECEC',
  },
  [SkillsType.UNIX]: {
    Icon: () => TerminalSquare,
    color: () => '#636E72',
  },
  [SkillsType.ALGORITHMS_AI]: {
    Icon: () => ScanLine,
    color: () => '#F8B195',
  },
  [SkillsType.GRAPHICS]: {
    Icon: () => Image,
    color: () => '#FFB6B9',
  },
  [SkillsType.ADAPTATION_CREATIVITY]: {
    Icon: () => HelpCircle,
    color: () => '#F6CD61',
  },
  [SkillsType.TECHNOLOGY_INTEGRATION]: {
    Icon: () => Globe,
    color: () => '#6C5B7B',
  },
  [SkillsType.SECURITY]: {
    Icon: () => Settings,
    color: () => '#355C7D',
  },
  [SkillsType.DB_DATA]: {
    Icon: () => TerminalSquare,
    color: () => '#2A363B',
  },
  [SkillsType.UNKNOWN]: {
    description: 'Unknown status',
    Icon: () => HelpCircle,
    color: () => '#81ECEC',
  },
};
