import { createTheme, Table } from '@mantine/core';

import classes from '~/styles/components/data-table.module.css';

export const themeTable = createTheme({
  components: {
    Table: Table.extend({
      defaultProps: {
        striped: false,
        highlightOnHover: true,
        className: classes.table,
        style: {
          borderRadius: '4px',
        },
      },
    }),
  },
});
