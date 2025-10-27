'use client';

import { Group, GroupProps, ScrollArea, Stack } from '@mantine/core';
import { ModalsProvider, ModalsProviderProps } from '@mantine/modals';
import { EntityType } from '~/types/core/entity';
import { DataTableError } from './error';
import { DataTableLimitation, DataTableLimitationProps } from './limitation';
import { DataTablePagination, DataTablePaginationProps } from './pagination';
import { DataTableProvider, DataTableProviderProps } from './provider';
import { DataTableSearch, DataTableSearchProps } from './search';
import { DataTableTotal, DataTableTotalProps } from './total';
import { DataTableUI, DataTableUIProps } from './ui';

export interface DataTableProps<T>
  extends DataTableUIProps<T>,
    DataTableProviderProps,
    DataTableComponentProps,
    Pick<ModalsProviderProps, 'modals'> {
  withPagination?: boolean;
  withTotal?: boolean;
  withLimitation?: boolean;
  withSearch?: boolean;
  topSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
}

export interface DataTableComponentProps {
  totalProps?: DataTableTotalProps;
  paginationProps?: DataTablePaginationProps;
  limitationProps?: DataTableLimitationProps;
  searchProps?: DataTableSearchProps;
  topSectionProps?: GroupProps;
  bottomSectionProps?: GroupProps;
}

export function DataTable<T extends EntityType>({
  /**
   * Component Visibility
   */
  withPagination = false,
  withLimitation = false,
  withSearch = false,
  withTotal = false,
  topSection,
  bottomSection,

  /**
   * Componenet Props
   */
  paginationProps,
  totalProps,
  limitationProps,
  searchProps,
  topSectionProps,
  bottomSectionProps,

  modals,

  /**
   * Rest props a.k.a DataTableUIProps
   */
  ...props
}: DataTableProps<T>) {
  return (
    <ModalsProvider modals={modals}>
      <DataTableProvider context={props.context} params={props.params}>
        <Stack>
          {/**
           * Top Section
           */}
          <Group {...topSectionProps}>
            {topSection}

            {withSearch && <DataTableSearch {...searchProps} />}
          </Group>

          {/**
           * Main Table Section
           */}
          <ScrollArea
            scrollbarSize={4}
            scrollbars="xy"
            style={{
              borderRadius: '0.5rem',
              border: '1px solid var(--mantine-color-gray-2)',
            }}
          >
            <DataTableUI {...props} />
          </ScrollArea>

          {/**
           * Bottom Section
           */}
          <Group px={'sm'} justify="space-between" {...bottomSectionProps}>
            {withTotal && <DataTableTotal {...totalProps} />}

            {withPagination && <DataTablePagination {...paginationProps} />}

            {withLimitation && <DataTableLimitation {...limitationProps} />}

            {bottomSection}
          </Group>
        </Stack>

        <DataTableError />
      </DataTableProvider>
    </ModalsProvider>
  );
}
