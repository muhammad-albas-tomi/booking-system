'use client';

import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';

NProgress.configure({ showSpinner: true });

export const ProgressBarClient = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
};
