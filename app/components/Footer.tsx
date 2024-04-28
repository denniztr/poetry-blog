import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="bg-white/10 p-12 mt-20">
      <footer className="max-w-[1240px] m-auto">
        <div className="flex items-center gap-2">
          <div className="h-7 w-8 relative opacity-70">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-fit rounded-sm"
            />
          </div>
          <Link href="/" className="text-white tracking-wide font-semibold">
            FicLibrary
          </Link>
        </div>
      </footer>
      <section className='text-center text-white'>
        © 2024 FicLibrary. All rights reserved.
      </section>
    </section>
  );
}
