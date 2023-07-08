import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-around p-5'>
        <div className=''>
          <h1>Sign in</h1>
        </div>
        <div className=''>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </>
  );
}
