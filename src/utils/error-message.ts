export function parseErrorMessage(error: Error): string {
  console.log(error);

  try {
    const parsed =
      typeof error.message === 'string' ? JSON.parse(error.message) : error;

    const errors = parsed?.errors;

    if (Array.isArray(errors) && errors.length > 0) {
      // Handle jika detail adalah array (seperti validasi nested)
      const details = errors.flatMap((err) => {
        if (Array.isArray(err.detail)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return err.detail.map((d: any) => d?.detail || 'Terjadi kesalahan.');
        }

        return err.detail ? [err.detail] : ['Terjadi kesalahan.'];
      });

      return details.join(', ');
    }

    if (parsed?.message && typeof parsed.message === 'string') {
      return parsed.message;
    }

    return 'Terjadi kesalahan.';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return typeof error.message === 'string'
      ? error.message
      : 'Terjadi kesalahan.';
  }
}
