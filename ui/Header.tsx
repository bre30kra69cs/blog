import type {FC, ReactNode} from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
  children?: ReactNode;
};

export const Header: FC<HeaderProps> = ({children}) => {
  return <header className={styles.Main}>{children}</header>;
};
