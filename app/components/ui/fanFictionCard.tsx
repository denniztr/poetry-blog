import Link from 'next/link';
import Image from 'next/image';

import { MdMoreHoriz } from 'react-icons/md';

import clsx from 'clsx';

const FanFictionCard = ({
  src,
  title,
  description,
  author,
  relation,
}: {
  src: string;
  title: string;
  description: string;
  author: string;
  relation: string;
}) => {
  return (
    <section className="w-full h-72 flex gap-10 relative">
      <div className="h-72 w-52 shadow-xl shadow-black relative transition-all duration-300 hover:scale-105">
        <Link href="/">
          <div className="relative h-72 w-52">
            <Image src={src} alt="Album" fill />
          </div>
        </Link>
      </div>
      <article className="overflow-hidden">
        <Link href="/" className="inline-block">
          <h2 className="text-2xl font-semibold hover:underline">{title}</h2>
        </Link>
        <ul className="flex gap-2 text-sm text-gray-400 mt-2">
          <li>
            <Link href="/" className="p-1 bg-purple-800 rounded-sm">
              Фемслэш
            </Link>
          </li>
          <li>
            <Link href="/" className="p-1 bg-green-800 rounded-sm">
              Гет
            </Link>
          </li>
          <li>
            <Link href="/" className="p-1 bg-orange-800 rounded-sm">
              Слэш
            </Link>
          </li>
          <li>
            <Link href="/" className="p-1 bg-indigo-800 rounded-sm">
              Фэмслеш
            </Link>
          </li>
          <li>
            <Link href="/" className="p-1 bg-yellow-800 rounded-sm">
              Смешанный
            </Link>
          </li>
        </ul>
        <p className="text-sm text-gray-400 my-2">
          Автор:{' '}
          <Link href="/" className="pl-2 hover:underline">
            {author}
          </Link>
        </p>
        <ul className="flex gap-2 text-sm text-gray-400">
          <span>Персонажи:</span>
          <li>
            <Link href="/" className="hover:underline">
              Иван Маргодлин
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Кукла Поппи
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Черника
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Продавец кофе
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2 text-sm text-gray-400 mt-4 mb-6">
          <span>Теги:</span>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Hurt/Comfort
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Детектив
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Триллер
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Постапокалипсис
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Songfic
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="p-1 bg-white/30 transition-all duration-300 hover:bg-white/20"
            >
              Драки
            </Link>
          </li>
        </ul>
        <p className="text-sm text-gray-400">{description}</p>
      </article>
      <MdMoreHoriz className="absolute right-0 cursor-pointer" size={30} />
    </section>
  );
};

export default FanFictionCard;
