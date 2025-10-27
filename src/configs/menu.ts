import {
  Icon,
  IconAddressBook,
  IconBedFilled,
  IconCircleDashedPercentage,
  IconLayoutDashboard,
  IconProps,
} from '@tabler/icons-react';

type Menu =
  | {
      label: string;
      icon:
        | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
        | React.ComponentType<React.SVGProps<SVGSVGElement>>;
      href: string;
      segment: string | null;
      permissions?: string[];
    }
  | {
      label: string;
      icon:
        | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
        | React.ComponentType<React.SVGProps<SVGSVGElement>>;
      segment: string | null;
      permissions?: string[];
      children: {
        label: string;
        href: string;
        permissions?: string[];
      }[];
    };

export const menu: Menu[] = [
  {
    label: 'Beranda',
    icon: IconLayoutDashboard,
    href: '/',
    segment: 'dashboard',
  },

  {
    label: 'Room Booking',
    icon: IconBedFilled,
    segment: 'hris',
    href: '/hris/book-now',
  },

  {
    label: 'Penawaran',
    icon: IconCircleDashedPercentage,
    segment: 'contacts',
    href: '/contacts/list',
  },

  {
    label: 'Kontak',
    icon: IconAddressBook,
    segment: 'settings',
    href: '/settings/profile',
  },
];
