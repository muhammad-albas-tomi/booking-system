'use client';

import { Text, TextProps } from '@mantine/core';
import { useFetchPaginatedData } from '../hooks';
import { useDataTableContext } from './context';

export interface DataTableTotalProps extends TextProps {
  label?: string;
}

export function DataTableTotal({ label, ...props }: DataTableTotalProps) {
  const { context, params } = useDataTableContext();
  const { meta } = useFetchPaginatedData(context, params);

  return (
    <Text miw={190} fz="sm" fw={500} c="gray.8" {...props}>
      {label || 'Total Data'}: {meta?.totalData || 0}
    </Text>
  );
}
