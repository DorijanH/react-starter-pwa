// Components import
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import UserInformation from '../components/UserInformation/UserInformation';

// Configs import
import theme from '../config/theme';

// Global styles import
import '../styles/global.scss';

// Checks whether app is in production or development mode
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Custom app component. This component is wrapper around each page so the logic common to
 * all pages should be placed here. More about custom app can be found on the following link
 * https://nextjs.org/docs/advanced-features/custom-app.
 *
 * @param {Object} props Various component's props
 * @returns component's elements
 */
function App(props) {
  const {
    Component,
    pageProps
  } = props;

  return (
    <>
      <Head>
        <title>
          {`${Component.title || 'React PWA starter'} ${!isProduction ? ' - development' : ''}`}
        </title>
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {Component.showUser && (
          <UserInformation />
          )}
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
