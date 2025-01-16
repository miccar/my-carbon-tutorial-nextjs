'use client';

import { useRouter } from 'next/navigation';

const Workflow = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    // Redirect to the desired subroute
    router.push(`/pippo/${id}/workflow/1`);
  }, [id, router]);

  return null; // Optionally, render a loading spinner here
};
export default Workflow;
