import { CSSProperties, HTMLAttributes } from 'react';

export interface ICommonComponentProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  style?: CSSProperties;
}
