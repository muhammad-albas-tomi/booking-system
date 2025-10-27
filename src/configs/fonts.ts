import { Inter, Plus_Jakarta_Sans, Poppins } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const inter = Inter({
  subsets: ['latin'],
});
