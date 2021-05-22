import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/fira-mono';
import '@fontsource/noto-serif';
import '@fontsource/open-sans';

const fonts = {
  heading: 'Noto Serif',
  body: 'Noto Serif',
  'sans-serif': 'Open Sans',
  mono: 'Fira Mono',
};

const fontSizes = {
  xs: '14px',
  sm: '16px',
  md: '20px',
  lg: '22px',
  xl: '32px',
  '2xl': '44px',
  '3xl': '54px',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  fontSizes,
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
});

export default theme;
