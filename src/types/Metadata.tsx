import { type ElementType } from 'react';

export interface Metadata {
  description?: string;
  Icon: (validated?: boolean) => ElementType;
  color: (validated?: boolean | null) => string;
}
