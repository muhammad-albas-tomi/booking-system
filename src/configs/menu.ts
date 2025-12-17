import {
  Icon,
  IconAddressBook,
  IconBedFilled,
  IconCircleDashedPercentage,
  IconLayoutDashboard,
  IconProps,
  IconUserCheck,
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
      isProtected?: boolean;
    }
  | {
      label: string;
      icon:
        | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>
        | React.ComponentType<React.SVGProps<SVGSVGElement>>;
      segment: string | null;
      permissions?: string[];
      isProtected?: boolean;
      children: {
        label: string;
        href: string;
        isProtected?: boolean;
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
    isProtected: true,
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
  {
    label: 'Admin Dashboard',
    icon: IconUserCheck,
    href: '/admin',
    segment: 'admin',
    isProtected: true,
  },
];
