import type {FC} from 'react';
import type {AppProps} from 'next/app';

import '../styles/reset.scss';
import '../styles/root.scss';
import '../styles/fonts.scss';
import '../styles/theme.scss';

const App: FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
};

export default App;
