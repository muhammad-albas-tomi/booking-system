'use client';

import { useSearchQuery } from '~/stores/search';

export default function BookingPage() {
  const { query } = useSearchQuery();
  return <div>Booking Page: {query}</div>;
}
