import { MouseEvent, ReactNode } from 'react';
// Types
import { ICommonComponentProps } from '@/Types';

export enum EButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IButtonProps extends ICommonComponentProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  variant?: EButtonVariants;
}
