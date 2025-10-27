import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { useDataTableContext } from '~/components/core/data-table/context';
import { useFetchPaginatedData } from '~/components/core/hooks';
import { toast } from '~/components/core/toast';

const toastConfig = {
  title: 'An error occured!',
  autoClose: false,
};

function parsErrorMessage(error: Error): string[] {
  try {
    const parsed =
      typeof error.message === 'string' ? JSON.parse(error.message) : error;

    const errors = parsed?.errors;

    if (Array.isArray(errors) && errors.length > 0) {
      return errors.flatMap((err) => {
        if (Array.isArray(err.detail)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return err.detail.map((d: any) => d?.detail || 'Terjadi kesalahan.');
        }

        return err.detail ? [err.detail] : ['Terjadi kesalahan.'];
      });
    }

    if (parsed?.message && typeof parsed.message === 'string') {
      return [parsed.message];
    }

    return ['Terjadi kesalahan.'];
  } catch (e) {
    console.log(e);
    return typeof error.message === 'string'
      ? [error.message]
      : ['Terjadi kesalahan.'];
  }
}

export function DataTableError() {
  const { context, params } = useDataTableContext();
  const { error } = useFetchPaginatedData(context, params);

  useEffect(() => {
    if (error) {
      const messages = parsErrorMessage(error);

      messages.forEach((msg) => {
        const lowerMsg = msg.toLowerCase();

        if (
          lowerMsg.includes('invalid token') ||
          lowerMsg.includes('expired')
        ) {
          toast.error({
            title: 'Error',
            message: msg,
          });
        } else {
          toast.error({
            ...toastConfig,
            message: msg,
          });
        }
      });
    }

    return () => {
      notifications.clean();
    };
  }, [error]);

  return null;
}
