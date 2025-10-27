import {
  IconAlertTriangle,
  IconEmergencyBed,
  IconMoon,
  IconNotebook,
  IconRun,
  IconUser,
  IconWalk,
} from '@tabler/icons-react';

export const getActivityMeta = (category: string) => {
  const key = category.toLowerCase();

  const map: Record<
    string,
    {
      icon: React.ReactNode;
      labelColor: string;
      color: string;
    }
  > = {
    presensi: {
      icon: <IconUser style={{ width: 18, height: 18 }} />,
      labelColor: 'blue',
      color: 'blue.1',
    },
    sos: {
      icon: <IconEmergencyBed style={{ width: 18, height: 18 }} color="red" />,
      labelColor: 'red',
      color: 'red.0',
    },
    aktivitas: {
      icon: <IconWalk style={{ width: 18, height: 18 }} />,
      labelColor: 'green',
      color: 'green.0',
    },
    patroli: {
      icon: <IconRun style={{ width: 18, height: 18 }} />,
      labelColor: 'grape',
      color: 'grape.0',
    },
    atensi: {
      icon: <IconAlertTriangle style={{ width: 18, height: 18 }} />,
      labelColor: 'yellow',
      color: 'yellow.0',
    },
    'buku tamu': {
      icon: <IconNotebook style={{ width: 18, height: 18 }} />,
      labelColor: 'indigo',
      color: 'indigo.0',
    },
    default: {
      icon: <IconMoon style={{ width: 18, height: 18 }} />,
      labelColor: 'gray',
      color: 'gray.0',
    },
  };

  return map[key] || map['default'];
};
