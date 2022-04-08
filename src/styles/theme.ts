import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '24rem',
    md: '48rem',
    lg: '90rem',
    xl: '120rem',
  },
  colors: {
    banner: '#001123',
    highlight: '#FFBA08',
    dark: {
      text: '#47585B',
      info: '#999999',
    },
    light: {
      text: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.text',
        color: 'dark.text',
      },
    },
  },
});
