import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'gray.100',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'solid',
        colorScheme: 'purple',
      },
      baseStyle: {
        w: 'full',
      },
    },
  },
});

export default theme;
