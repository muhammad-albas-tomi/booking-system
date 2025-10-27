import { useMutation } from '@tanstack/react-query';
import { upload as uploadService } from '~/services/upload';

export function useUpload() {
  const {
    mutate: upload,
    isPending: isUploadPending,
    ...rest
  } = useMutation({
    mutationFn: uploadService,
  });

  return {
    upload,
    isUploadPending,
    ...rest,
  };
}
