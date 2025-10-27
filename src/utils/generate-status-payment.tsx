import { Badge } from '@mantine/core';

export const generateStatusPayment = ({ status = '' }: { status: string }) => {
  if (status === 'paid') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="green"
      >
        Lunas
      </Badge>
    );
  }

  if (status === 'unpaid') {
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
  if (status === 'awaiting-payment') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="#FF9500"
      >
        Menunggu
      </Badge>
    );
  }
  if (status === 'overdue') {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="red"
      >
        Terlambat
      </Badge>
    );
  }
  if (status === 'payment-failed') {
    return (
      <Badge
        variant="light"
        style={{
          textTransform: 'capitalize',
        }}
        color="red"
      >
        Gagal
      </Badge>
    );
  }

  return (
    <Badge variant="light" style={{ textTransform: 'capitalize' }} color="gray">
      {status}
    </Badge>
  );
};
