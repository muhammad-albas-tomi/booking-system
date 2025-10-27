import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { toast } from '~/components/core/toast';

const toastConfig = {
  title: 'An error occured!',
  autoClose: false,
};

export function DataTableErrorMessage({ error }: { error: Error }): string[] {
  function parsErrorMessage(error: Error): string[] {
    try {
      const parsed =
        typeof error.message === 'string' ? JSON.parse(error.message) : error;

      const errors = parsed?.errors;

      if (Array.isArray(errors) && errors.length > 0) {
        return errors.flatMap((err) => {
          if (Array.isArray(err.detail)) {
            return err.detail.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (d: any) => d?.detail || 'Terjadi kesalahan.',
            );
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

  return [];
}
