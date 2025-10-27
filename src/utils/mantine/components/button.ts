import { createTheme } from '@mantine/core';

export const themeButton = createTheme({
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        height: '40px',
      },

      styles: () => ({
        root: {
          borderRadius: '0.4rem',
        },
      }),
    },
  },
});
