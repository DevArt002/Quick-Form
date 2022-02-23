import { MouseEvent } from 'react';
// Types
import { ICommonComponentProps } from '@/Types';

export interface IDropdownProps extends ICommonComponentProps {
  id?: string;
  name?: string;
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  value?: string;
  options: string[];
}
