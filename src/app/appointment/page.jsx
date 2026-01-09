'use client'

import dynamic from 'next/dynamic';

const AppointmentForm = dynamic(
  () => import('@/components/AppointmentForm'),
  {
    ssr: false,
    loading: () => <p>Loading Appointment Form...</p>,
  }
);

export default function Appointment() {
  return <AppointmentForm />;
}