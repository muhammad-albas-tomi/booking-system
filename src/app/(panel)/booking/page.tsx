'use client';

import { Metadata } from 'next';
import { useSearchQuery } from '~/stores/search';
export const metadata: Metadata = {
  title: 'Booking - StayEsea',
  description: 'Complete your booking on StayEsea.',
};

export default function BookingPage() {
  const { query } = useSearchQuery();
  return <div>Booking Page: {query}</div>;
}
