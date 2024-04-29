'use client';

import { useState, useEffect, useRef } from 'react';
import SortingPopUp from '@/app/components/SortingPopUp';

import clsx from 'clsx';


export const SelectorItem = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isButtonActive, setIsButtonActive] = useState<string | null>(null);

  const categoryRef = useRef<HTMLDivElement | null>(null);
  const genreRef = useRef<HTMLDivElement | null>(null);
  const relationRef = useRef<HTMLDivElement | null>(null);

  const togglePopup = (popupType: string) => {
    setIsOpen(isOpen === popupType ? null : popupType);
    setIsButtonActive(isButtonActive === popupType ? null : popupType);
  }

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (isOpen === 'category' && categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
      setIsOpen(null);
      setIsButtonActive(null);
    }

    if (isOpen === 'genre' && genreRef.current && !genreRef.current.contains(event.target as Node)) {
      setIsOpen(null);
      setIsButtonActive(null);
    }

    if (isOpen === 'relation' && genreRef.current && !genreRef.current.contains(event.target as Node)) {
      setIsOpen(null);
      setIsButtonActive(null);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen])


  return (
    <>
      <div className="relative" ref={categoryRef}>
        <button
          onClick={() => togglePopup('category')} 
          className={clsx(`py-2 px-4 border border-gray-400 rounded-xl transition-all duration-300 hover:bg-gray-400/40`, 
            isButtonActive === 'category' && 'bg-gray-400/40'
          )}
        >
          Категории
        </button>
        <div className="absolute inline-block h-6 w-6 bg-rose-800 shadow-xl rounded-full -top-3 -right-1 cursor-pointer transition-all duration-300 hover:bg-rose-700">
          <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            14
          </span>
        </div>
        {isOpen === 'category' && <SortingPopUp />}
      </div>

      <div className="relative" ref={genreRef}>
        <button
          onClick={() => togglePopup('genre')} 
          className={clsx(`py-2 px-4 border border-gray-400 rounded-xl transition-all duration-300 hover:bg-gray-400/40`, 
          isButtonActive === 'genre' && 'bg-gray-400/40'
        )}
        >
          Жанры
        </button>
        <div className="absolute inline-block h-6 w-6 bg-rose-800 shadow-xl rounded-full -top-3 -right-1 cursor-pointer transition-all duration-300 hover:bg-rose-700">
          <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </div>
        {isOpen === 'genre' && <SortingPopUp />}
      </div>

      <div className="relative" ref={relationRef}>
        <button
          onClick={() => togglePopup('relation')} 
          className={clsx(`py-2 px-4 border border-gray-400 rounded-xl transition-all duration-300 hover:bg-gray-400/40`, 
          isButtonActive === 'relation' && 'bg-gray-400/40'
        )}
        >
          Отношения
        </button>
        {isOpen === 'relation' && <SortingPopUp />}
      </div>
        <form className='absolute right-0 space-x-3'>
          <label htmlFor="" >Сортировать по: </label>
          <select className='bg-transparent cursor-pointer text-gray-400'>
            <option value="popularity">популярности</option>
            <option value="date">дате публикации</option>
          </select>
        </form>
    </>
  );
};
