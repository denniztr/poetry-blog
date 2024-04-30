'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import SearchQuery from './SearchQuery';

export default function Header() {
  const pathname = usePathname();

  return (
    <section className="w-full absolute z-20">
      <header className="max-w-[1240px] m-auto p-6 flex justify-between">
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
          {pathname !== '/' && (
            <SearchQuery
              className="
                      w-[300px]
                      bg-white
                      bg-opacity-30
                      rounded-2xl
                      ml-4
                      py-[3px]
                      px-6
                      outline-none
                      transition-all
                      duration-300
                      focus:bg-opacity-60
                      focus:shadow-md
                      text-black
                      text-semibold
                      "
            />
          )}
        </div>
        <nav className="hidden md:block">
          <ul className="text-gray-300 flex space-x-6 items-center font-normal">
            <li className="">
              <Link
                href="/fanfiction"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Фанфики
              </Link>
            </li>
            <li>
              <Link
                href="/authors"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Авторы
              </Link>
            </li>
            <li>
              <Link
                href="/popular"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Популярное
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Заказы
              </Link>
            </li>
            <div className="w-4 h-[1px] bg-white" />
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
                href="/#"
                className="text-sm pb-1 transition duration-300 hover:border-b"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
