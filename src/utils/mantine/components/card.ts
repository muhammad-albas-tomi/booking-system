import { createTheme } from '@mantine/core';

export const themeCard = createTheme({
  components: {
    Card: {
      styles: () => ({
        root: {
          borderRadius: '0.3rem',
        },
      }),
    },
  },
});
