import { createTheme } from '@mantine/core';
import { plusJakartaSans } from '~/configs/fonts';

export const themeFonts = createTheme({
  fontFamily: plusJakartaSans.style.fontFamily,
  headings: { fontFamily: plusJakartaSans.style.fontFamily },
});
