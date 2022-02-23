import { ChangeEvent } from 'react';
// Types
import { ICommonComponentProps } from '@/Types';

export enum ETextInputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
}

export interface ITextInputProps extends ICommonComponentProps {
  id?: string;
  name?: string;
  label?: string;
  type?: ETextInputTypes;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
