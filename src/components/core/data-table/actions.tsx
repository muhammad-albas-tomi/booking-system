import {
  Button,
  ButtonGroup,
  Divider,
  Group,
  MantineProvider,
  Menu,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Stack,
  Tooltip,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { ActionMenuProps, ActionType } from '~/types/core/table';
import {
  extractParamsFromPath,
  replaceParamsInPath,
} from '~/utils/core/parser';

import classes from '~/styles/components/data-table.module.css';

export interface DataTableActionsProps<T> {
  actions?: ActionType[];
  row: T;
}

export function DataTableActions<T>({
  actions,
  row,
}: DataTableActionsProps<T>) {
  const renderActions = (action: ActionType, key: number | string) => {
    if (action.type === 'divider') {
      return <Divider key={key} />;
    }

    if (action.type === 'modal') {
      const { type: _t, label, modal, modalProps, ...props } = action;

      return (
        <Button
          key={key}
          onClick={() => {
            modals.openContextModal({
              modal,
              innerProps: { row },
              ...modalProps,
            });
          }}
          {...props}
        >
          {label}
        </Button>
      );
    }

    if (action.type === 'link') {
      const { type: _t, label, href, ...props } = action;

      const keys = extractParamsFromPath(href.toString());
      const link = replaceParamsInPath(href.toString(), keys, row);

      return (
        <Button
          key={key}
          component={Link}
          href={link}
          color="gray.4"
          variant="outline"
          c="#d84f27"
          size="sm"
          {...props}
        >
          {label}
        </Button>
      );
    }

    if (action.type === 'button') {
      const { type: _t, label, ...props } = action;

      return (
        <Button key={key} {...props}>
          {label}
        </Button>
      );
    }

    if (action.type === 'composition') {
      const { main, subActions } = action;

      return (
        <ButtonGroup className={classes.buttonGroup} key={key}>
          {renderActions(main, `main-${key}`)}

          <Popover withinPortal zIndex={10}>
            <PopoverTarget>
              <Button
                variant="outline"
                color="gray.4"
                size="sm"
                px="sm"
                c="#d84f27"
                id="selector"
              >
                <IconChevronDown
                  style={{
                    width: 16,
                    height: 16,
                    strokeWidth: 2,
                  }}
                />
              </Button>
            </PopoverTarget>

            <PopoverDropdown p={0}>
              <Stack gap={4} p={4}>
                {subActions.map((subAction, key) => {
                  return renderActions(subAction, `subaction-${key}`);
                })}
              </Stack>
            </PopoverDropdown>
          </Popover>
        </ButtonGroup>
      );
    }

    // Menambahkan  untuk tipe 'menu'
    if (action.type === 'menu') {
      const {
        type: _t,
        icon,
        label,
        content,
        submenu,
        ...props
      } = action as ActionMenuProps;

      return (
        <Menu key={key} shadow="md" width={200} position="bottom-end">
          <Menu.Target>
            <Tooltip label={label}>
              <Button leftSection={icon} {...props}>
                {label}
              </Button>
            </Tooltip>
          </Menu.Target>

          <Menu.Dropdown>
            {content && <Menu.Label>{content}</Menu.Label>}

            {submenu.map((subAction, subIndex) => {
              if (subAction.type === 'modal') {
                const {
                  color,
                  icon: subIcon,
                  label: subLabel,
                  modal,
                  modalProps,
                } = subAction;

                return (
                  <Menu.Item
                    color={color}
                    key={`submenu-${subIndex}`}
                    leftSection={subIcon}
                    onClick={() => {
                      modals.openContextModal({
                        modal,
                        innerProps: { row },
                        ...modalProps,
                      });
                    }}
                  >
                    {subLabel}
                  </Menu.Item>
                );
              }

              if (subAction.type === 'link') {
                const {
                  icon: subIcon,
                  label: subLabel,
                  href,
                  color,
                  target,
                } = subAction;

                const keys = extractParamsFromPath(href.toString());
                const link = replaceParamsInPath(href.toString(), keys, row);

                return (
                  <Menu.Item
                    color={color}
                    key={`submenu-${subIndex}`}
                    leftSection={subIcon}
                    component={Link}
                    href={link}
                    target={target}
                  >
                    {subLabel}
                  </Menu.Item>
                );
              }

              if (subAction.type === 'button') {
                const { type: _t, label, ...props } = subAction;

                return (
                  <Menu.Item
                    key={`submenu-${subIndex}`}
                    leftSection={props.icon}
                    color={props.color}
                    onClick={props.onClick}
                    disabled={props.disabled}
                  >
                    {label}
                  </Menu.Item>
                );
              }

              return null;
            })}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return null;
  };

  return (
    <MantineProvider
      theme={{
        components: {
          Button: Button.extend({
            defaultProps: {
              size: 'sm',
              variant: 'subtle',
              fw: 550,
            },
          }),
        },
      }}
    >
      <Group wrap="nowrap" gap={4}>
        {actions?.map(renderActions)}
      </Group>
    </MantineProvider>
  );
}
