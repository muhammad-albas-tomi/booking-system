import { toast } from '~/components/core/toast';
import { ErrorResponseType } from '~/types/core/response';

export function errorsToToast(error: Error) {
  try {
    const errors = JSON.parse(error.message) as ErrorResponseType;
    errors.errors.forEach((error) => {
      const detail = error.detail as string | ErrorResponseType['errors'];

      if (Array.isArray(detail)) {
        detail.forEach((err) => {
          toast.error({
            message: err.detail,
          });
        });
      } else {
        toast.error({
          message: detail,
        });
      }
    });
  } catch {
    toast.error({
      message: 'Terjadi kesalahan, silakan coba lagi.',
    });
  }
}
