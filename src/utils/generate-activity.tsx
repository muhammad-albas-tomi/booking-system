import { Badge } from '@mantine/core';

export const generateActivity = ({ action = '' }: { action: string }) => {
  if (action.includes('Login')) {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="green"
      >
        Login
      </Badge>
    );
  }

  if (action.includes('Logout')) {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="dark"
      >
        Logout
      </Badge>
    );
  }
  if (action.includes('Update')) {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="yellow"
      >
        Update
      </Badge>
    );
  }

  if (action.includes('Delete')) {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="red"
      >
        Delete
      </Badge>
    );
  }
  if (action.includes('Create')) {
    return (
      <Badge
        variant="light"
        style={{ textTransform: 'capitalize' }}
        color="blue"
      >
        Create
      </Badge>
    );
  }

  return (
    <Badge variant="light" style={{ textTransform: 'capitalize' }} color="gray">
      {action}
    </Badge>
  );
};
