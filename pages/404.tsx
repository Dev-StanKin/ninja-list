import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className='not-found'>
      <h2>Oooops not found</h2>
      <h3>That page does not exist</h3>
      <p>
        Back to <Link href='/'>HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
