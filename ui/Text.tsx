import type {FC, ReactNode} from 'react';

import {bem} from '../utils/classnames';

import styles from './Text.module.scss';

type TextProps = {
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  weight?: 'light' | 'regular' | 'bold';
  children?: ReactNode;
};

const b = bem(styles);

export const Text: FC<TextProps> = ({size = 'm', weight = 'regular', children}) => {
  return (
    <span
      className={b('', {
        [`weight-${weight}`]: true,
        [`size-${size}`]: true,
      })}
    >
      {children}
    </span>
  );
};
