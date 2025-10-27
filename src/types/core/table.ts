import {
  ButtonProps,
  ModalProps,
  PolymorphicComponentProps,
} from '@mantine/core';
import { LinkProps } from 'next/link';

/**
 * Base action props.
 */
export interface ActionProps {
  label: string;
  type: string;
  icon?: React.ReactNode;
}

/**
 * Action button props.
 */

export interface ActionModalProps extends ActionProps, ButtonProps {
  type: 'modal';
  modal: string;
  modalProps?: Omit<ModalProps, 'opened' | 'onClose'>;
}

/**
 * Action link props.
 */
export interface ActionLinkProps
  extends ActionProps,
    ButtonProps,
    Omit<LinkProps, keyof ButtonProps>,
    Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'download' | 'target'> {
  type: 'link';
}

export interface ActionButtonProps
  extends ActionProps,
    PolymorphicComponentProps<'button', ButtonProps> {
  type: 'button';
}

export interface ActionMenuProps extends ActionProps, ButtonProps {
  type: 'menu';
  content?: React.ReactNode;
  submenu: ActionType[];
} /**
 * Action menu props.
 */
export interface ActionMenuProps extends ActionProps, ButtonProps {
  type: 'menu';
  content?: React.ReactNode; // Label untuk menu section
  submenu: ActionType[]; // Submenu items (modal, link, atau button actions)
}

export interface ActionCompositionProps {
  type: 'composition';
  main: ActionType;
  subActions: ActionType[];
}

/**
 * Action type.
 */
export type ActionType =
  | ActionModalProps
  | ActionLinkProps
  | ActionButtonProps
  | ActionMenuProps
  | ActionCompositionProps
  | {
      type: 'divider';
    };
