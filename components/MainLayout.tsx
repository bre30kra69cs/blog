import type {FC, ReactNode} from 'react';

import {Layout} from '../ui/Layout';
import {MainHeader} from './MainHeader';
import {MainFooter} from './MainFooter';
import {Content} from '../ui/Content';

type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <Layout>
      <MainHeader />
      <Content>{children}</Content>
      <MainFooter />
    </Layout>
  );
};
