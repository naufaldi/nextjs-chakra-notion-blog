import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/fira-mono';
import '@fontsource/noto-serif';
import '@fontsource/open-sans';

const fonts = {
  ...chakraTheme.fonts,
  heading: 'serif',
  body: `Noto Serif, serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  'sans-serif': 'Open Sans, sans-serif',
  mono: 'Fira Mono, monospace',
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

const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

const theme = extendTheme({
  fontSizes,
  fonts,
  breakpoints,
  fontWeights,
});

export default theme;
