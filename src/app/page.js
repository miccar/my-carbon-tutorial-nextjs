'use client';
import LandingPage from './home/page';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  //return <LandingPage />;
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired subroute
    router.push('/pippo/1');
  }, [router]);

  return null; // Optionally, render a loading spinner here
}
