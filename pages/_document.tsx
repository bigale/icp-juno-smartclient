import { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="/isomorphic/skins/Shiva/skin_styles.css" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body { 
              margin: 0;
              padding: 0;
              height: 100vh;
              width: 100vw;
              background: white !important;
              overflow: hidden;
            }
            #__next {
              height: 100vh;
              width: 100vw;
            }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}