import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center>
      <Link href='/work' passHref>
        <MagneticButton
          variant='outline'
          className='rounded-[100px] bg-white/20 px-10 py-8 text-base before:-top-1/2 hover:text-background'
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}
