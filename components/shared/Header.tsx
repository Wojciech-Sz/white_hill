/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZbBImJol8pv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import MobileMenu from './MobileMenu';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-white/90  py-3 shadow-sm dark:bg-gray-950 px-5 md:px-10  md:py-4'>
      <Link
        href='/'
        className='flex items-center'
        prefetch={false}
      >
        <span className='text-2xl font-bold'>
          Architekt
        </span>
      </Link>
      <Navbar />
      <Button
        variant='default'
        className='hidden text-xl md:inline-flex'
      >
        <Link href='/#contact'>Kontakt</Link>
      </Button>

      <MobileMenu />
    </header>
  );
}
