import 'src/locales/i18n';
import 'simplebar/src/simplebar.css';
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import createEmotionCache from 'src/utils/createEmotionCache';
import ThemeProvider from '../theme';
import ThemeLocalization from '../locales';
import { StyledChart } from 'src/components/chart';
import ProgressBar from 'src/components/progress-bar';
import SnackbarProvider from 'src/components/snackbar';
import { MotionLazyContainer } from 'src/components/animate';
import { AuthContext } from 'src/context/Auth/authContext';
import { Api } from 'src/auth/Api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientSideEmotionCache = createEmotionCache();

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function MyApp(props) {
  const { handlers, state } = Api();
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthContext.Provider
        value={{
          handlers,
          state,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeLocalization>
                <SnackbarProvider>
                  <StyledChart />
                  <ProgressBar />
                  <ToastContainer />
                  {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
              </ThemeLocalization>
            </ThemeProvider>
          </MotionLazyContainer>
        </LocalizationProvider>
      </AuthContext.Provider>
    </CacheProvider>
  );
}
