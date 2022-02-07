// General import
import React from 'react';

// Components import
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

// Application description
const APP_DESCRIPTION = 'This is a PWA built by using Next.js + next-pwa';

/**
 * Custom document component. It is used to augment application's
 * html any body tags. More about custom document can be found on the
 * following link https://nextjs.org/docs/advanced-features/custom-document.
 *
 * @class CustomDocument
 * @extends {Document}
 */
class CustomDocument extends Document {
  /**
   * Server side data requirements.
   *
   * @static
   * @param {Object} ctx Context
   * @returns initial props
   * @memberof CustomDocument
   */
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App isServer {...props} />)
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
      isServer: false
    };
  }

  /**
   * Renders the component.
   *
   * @returns component's elements
   * @memberof CustomDocument
   */
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="apple-touch-icon" href="assets/icons/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
