import type {FC, ReactNode} from 'react';

import styles from './Content.module.scss';

type ContentProps = {
  children?: ReactNode;
};

export const Content: FC<ContentProps> = ({children}) => {
  return <section className={styles.Main}>{children}</section>;
};
