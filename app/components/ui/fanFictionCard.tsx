'use client'

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { MdMoreHoriz } from 'react-icons/md';

import ImageModal from '../ImageModal';

import CardPopUp from '../CardPopUp';



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

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  return (
    <section className="w-full flex gap-6 flex-wrap justify-center md:flex-nowrap">
      <ImageModal src={src} isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)} />
      <div>
          <div 
            className="relative h-72 min-w-52 shadow-xl shadow-black transition-all duration-300 hover:scale-105 cursor-pointer">
            <Image src={src} alt="Album" fill onClick={() => setImageModalOpen(true)} />
          </div>
      </div>
      <div className="w-full relative">
        <article className="text-white">
          <div className='space-y-3 md:space-y-2'>
            <div className='space-x-6'>
              <Link href="/fanfiction" className="inline-block">
                <h2 className="text-2xl font-semibold hover:underline">{title}</h2>
              </Link>
            </div>
            <ul className='flex gap-1 flex-wrap text-gray-400 text-xs sm:text-sm md:gap-2'>
            <li>
                <Link href='/fanfiction' className="p-1 bg-sky-800 rounded-sm">Джен</Link>
              </li>
              <li>
                <Link href='/fanfiction' className="p-1 bg-purple-800 rounded-sm">Фемслэш</Link>
              </li>
              <li>
                <Link href='/fanfiction' className="p-1 bg-green-800 rounded-sm">Слэш</Link>
              </li>
              <li>
                <Link href='/fanfiction' className="p-1 bg-orange-800 rounded-sm">Гет</Link>
              </li>
              <li>
                <Link href='/fanfiction' className="p-1 bg-indigo-800 rounded-sm">Смешанные</Link>
              </li>
              <li>
                <Link href='/fanfiction' className="p-1 bg-yellow-800 rounded-sm">Другие</Link>
              </li>
            </ul>
            <p className='text-xs text-gray-400 sm:text-sm'>Автор: <Link href='/' className='pl-1 hover:underline'>{author}</Link></p>
            <ul className='flex gap-1 flex-wrap text-gray-400 text-xs sm:text-sm md:gap-2'>
              <span className='text-xs text-gray-400 sm:text-sm'>Персонажи: </span>
              <li>
                <Link href='/' className="hover:underline">Иван Маргодлин</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Кукла Поппи</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Черника</Link>
              </li>
            </ul>
            <ul className='flex flex-wrap gap-1 text-gray-400 text-xs sm:text-sm md:gap-2'>
              <span className='text-xs text-gray-400 sm:text-sm'>Теги: </span>
              <li>
                <Link href='/' className="hover:underline">Hurt/Comfort</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Детекив</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Триллер</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">18+</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Драка</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Songfic</Link>
              </li>
              <li>
                <Link href='/' className="hover:underline">Постапокалипсис</Link>
              </li>
            </ul>
          </div>
          <div className='pt-3 text-sm text-gray-500'>
            <p className='md:h-[97px] xl:h-[120px] overflow-hidden'>{description}</p>
          </div>
        </article>
        <div className='absolute top-0 right-0'>
          <CardPopUp>
            <MdMoreHoriz className="cursor-pointer" size={27} /> 
          </CardPopUp>
        </div>
        <button 
          className='
            md:hidden 
            block 
            mt-6 
            w-full 
            text-gray-400 
            text-sm border 
            border-white 
            rounded-xl 
            bg-transparent 
            py-2 
            px-4
            '
          >Читать</button>
      </div>
    </section>
  );
};

export default FanFictionCard;
