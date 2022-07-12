import type {FC, ReactNode} from 'react';

import styles from './Footer.module.scss';

type FooterProps = {
  children?: ReactNode;
};

export const Footer: FC<FooterProps> = ({children}) => {
  return <footer className={styles.Main}>{children}</footer>;
};
