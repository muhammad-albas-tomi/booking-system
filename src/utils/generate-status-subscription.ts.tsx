import { Badge } from '@mantine/core';

export const generateStatusSubscription = ({
  status = '',
}: {
  status: string;
}) => {
  if (status === 'active') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="green"
      >
        Aktif
      </Badge>
    );
  }

  if (status === 'inactive') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="red"
      >
        Tidak Aktif
      </Badge>
    );
  }
  if (status === 'expired') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="red"
      >
        Expired
      </Badge>
    );
  }
  if (status === 'pending') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="yellow"
      >
        Menunggu
      </Badge>
    );
  }

  return (
    <Badge variant="light" style={{ textTransform: 'capitalize' }} color="gray">
      {status}
    </Badge>
  );
};
