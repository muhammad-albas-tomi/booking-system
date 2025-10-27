import { mergeThemeOverrides } from '@mantine/core';
import { themeColors } from './colors';
import { themeButton } from './components/button';
import { themeCard } from './components/card';
import { themePagination } from './components/pagination';
import { themeTable } from './components/table';
import { themeTextInput } from './components/text-input';
import { themeFonts } from './fonts';
import { themeMisc } from './misc';

export const theme = mergeThemeOverrides(
  themeColors,
  themeMisc,
  themeFonts,
  themeTable,

  // components
  themeButton,
  themeTextInput,
  themeCard,
  themePagination,
);
