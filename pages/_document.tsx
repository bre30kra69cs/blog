import type {FC} from 'react';
import {Html, Head, Main, NextScript} from 'next/document';

const Document: FC = () => {
  return (
    <Html>
      <Head />
      <body className="light-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
