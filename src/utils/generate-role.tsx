import { Badge } from '@mantine/core';

export const generateRole = ({ role = 'user' }: { role: string }) => {
  switch (role) {
    case 'owner':
      return (
        <Badge
          style={{ textTransform: 'capitalize' }}
          color="grape"
          variant="light"
        >
          Owner
        </Badge>
      );

    case 'admin':
      return (
        <Badge
          style={{ textTransform: 'capitalize' }}
          color="blue"
          variant="light"
        >
          Admin
        </Badge>
      );

    case 'employee':
      return (
        <Badge
          style={{ textTransform: 'capitalize' }}
          color="green"
          variant="light"
        >
          Karyawan
        </Badge>
      );

    default:
      return (
        <Badge
          style={{ textTransform: 'capitalize' }}
          color="gray"
          variant="light"
        >
          User
        </Badge>
      );
  }
};
