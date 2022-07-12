import type {NextPage} from 'next';

import {MainLayout} from '../components/MainLayout';
import {Text} from '../ui/Text';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Text size="s">Title Example</Text>
      <Text size="m">Title Example</Text>
      <Text size="l">Title Example</Text>
      <Text size="xl">Title Example</Text>
      <Text size="xxl">Title Example</Text>
    </MainLayout>
  );
};

export default Home;
