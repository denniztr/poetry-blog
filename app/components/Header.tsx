'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import ProfileDrawer from '@/app/components/profileDrawer/ProfileDrawer';
import Avatar from '@/app/components/Avatar';
import useRoutes from '@/app/hooks/useRoutes';
import MenuButton from '@/app/components/ProfileDrawerButton';

import clsx from 'clsx';

import { User } from '@prisma/client';


export default function Header({ currentUser }: { currentUser: User }) {
  const pathname = usePathname();
  const routes = useRoutes();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} user={currentUser} />
      <section
        className={clsx(
          `
            w-full 
            absolute 
            z-20
          `,
          pathname === '/register' && 'hidden'
        )}
      >
        <header className="max-w-[1240px] m-auto p-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-8 relative opacity-70">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-fit rounded-sm"
              />
            </div>
            <Link href="/" className="text-white tracking-wide">
              FicLibrary
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="text-gray-300 flex space-x-6 items-center font-normal">
              {routes.map((route, index) => (
                <li key={index} className="pb-1">
                  <Link
                    className={clsx(
                      `
                      text-sm 
                      pb-1 
                      transition 
                      duration-300 
                      hover:border-b
                    `,
                      route.active && 'border-b'
                    )}
                    href={route.path}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
              <div className="w-4 h-[1px] bg-white" />
              {!currentUser ? (
                <>
                  <li>
                    <Link
                      href="/register"
                      className="text-sm pb-1 transition duration-300 hover:border-b"
                    >
                      Регистрация
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="text-sm pb-1 transition duration-300 hover:border-b"
                    >
                      Войти
                    </Link>
                  </li>
                </>
              ) : (
                <div className="flex gap-6 text-sm items-center">
                  <p>{currentUser.name}</p>
                  <div
                    onClick={() => setDrawerOpen(true)}
                    className="cursor-pointer relative"
                  >
                    <Avatar />
                    <div className="absolute w-[10px] h-[10px] bg-orange-500 rounded-full top-0 right-0 shadow-md"></div>
                  </div>
                </div>
              )}
            </ul>
          </nav>
          <div
            className="block md:hidden text-gray-200 font-semibold"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuButton isOpen={drawerOpen}/>
          </div>
        </header>
      </section>
    </>
  );
}
