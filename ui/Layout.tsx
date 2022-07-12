import type {FC, ReactNode} from 'react';

import styles from './Layout.module.scss';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({children}) => {
  return <main className={styles.Main}>{children}</main>;
};
