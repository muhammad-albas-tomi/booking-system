import { createTheme, Pagination } from '@mantine/core';

import classNames from '~/styles/components/pagination.module.css';

export const themePagination = createTheme({
  components: {
    Pagination: Pagination.extend({
      defaultProps: {
        classNames,
      },
    }),
  },
});
