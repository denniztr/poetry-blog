import Link from 'next/link';


export default function Header() {
  return (
    <header className="py-6 flex justify-between">
      <div>
        <Link href="/" className="text-white tracking-wide">
          FicLibrary
        </Link>
      </div>
      <nav>
        <ul className="text-gray-300 flex space-x-6 items-center font-normal">
          <li className=''>
            <Link href="/register" className='pb-1 transition duration-300 hover:border-b'>Фанфики</Link>
          </li>
          <li>
            <Link href="/register" className='pb-1 transition duration-300 hover:border-b'>Авторы</Link>
          </li>
          <li>
            <Link href="/register" className='pb-1 transition duration-300 hover:border-b'>Популярное</Link>
          </li>
          <div className="w-4 h-[1px] bg-white"/>
          <li>
            <Link href="/register" className='pb-1 transition duration-300 hover:border-b'>Регистрация</Link>
          </li>
          <li>
            <Link href="/#" className='pb-1 transition duration-300 hover:border-b'>Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
