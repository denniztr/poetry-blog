'use client';

import { useState, useEffect, useRef } from 'react';

import SortingPopUp from '@/app/components/SortingPopUp';
import SelectedFilters from '@/app/components/SelectedFilters';

import clsx from 'clsx';

export const SelectorItem = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isButtonActive, setIsButtonActive] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const categoryRef = useRef<HTMLDivElement | null>(null);
  const genreRef = useRef<HTMLDivElement | null>(null);
  const relationRef = useRef<HTMLDivElement | null>(null);

  const togglePopup = (popupType: string) => {
    setIsOpen(isOpen === popupType ? null : popupType);
    setIsButtonActive(isButtonActive === popupType ? null : popupType);
  };

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (
      isOpen === 'category' &&
      categoryRef.current &&
      !categoryRef.current.contains(event.target as Node)
    ) {
      setIsOpen(null);
      setIsButtonActive(null);
    }

    if (
      isOpen === 'genre' &&
      genreRef.current &&
      !genreRef.current.contains(event.target as Node)
    ) {
      setIsOpen(null);
      setIsButtonActive(null);
    }

    if (
      isOpen === 'relation' &&
      relationRef.current &&
      !relationRef.current.contains(event.target as Node)
    ) {
      setIsOpen(null);
      setIsButtonActive(null);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const removeFilterItem = (filterItem: string) => {
    if (filterItem) {
      setSelectedFilters((prevFilters) => {
        return prevFilters.filter((filter) => filter !== filterItem);
      });
    }
  };

  return (
    <>
      <section 
        className="
          flex  
          items-center 
          justify-between 
          sm:justify-start
          sm:gap-4
        ">
        <div className="relative" ref={categoryRef}>
          <button
            onClick={() => togglePopup('category')}
            className={clsx(
              `
                py-2 
                px-4 
                border 
                border-gray-400 
                rounded-xl 
                transition-all 
                duration-300 
                hover:bg-gray-400/40
                text-xs
                md:text-base
                `,
              isButtonActive === 'category' && 'bg-gray-400/40'
            )}
          >
            Категории
          </button>
          {selectedFilters.length !== 0 && (
            <div className="absolute inline-block h-6 w-6 bg-rose-800 shadow-xl rounded-full -top-3 -right-1 cursor-pointer transition-all duration-300 hover:bg-rose-700">
              <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {selectedFilters.length}
              </span>
            </div>
          )}
          {isOpen === 'category' && (
            <SortingPopUp selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          )}
        </div>

        <div className="relative" ref={genreRef}>
          <button
            onClick={() => togglePopup('genre')}
            className={clsx(
              `
                py-2 
                px-4 
                border 
                border-gray-400 
                rounded-xl 
                transition-all 
                duration-300 
                hover:bg-gray-400/40
                text-xs
                md:text-base
                `,
              isButtonActive === 'genre' && 'bg-gray-400/40'
            )}
          >
            Жанры
          </button>
          {/* <div className="absolute inline-block h-6 w-6 bg-white/80 shadow-xl rounded-full -top-3 -right-1 cursor-pointer transition-all duration-300 hover:bg-rose-700">
          <span className="text-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </div> */}
          {isOpen === 'genre' && (
            <SortingPopUp selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          )}
        </div>

        <div className="relative" ref={relationRef}>
          <button
            onClick={() => togglePopup('relation')}
            className={clsx(
              `
              py-2 
              px-4 
              border 
              border-gray-400 
              rounded-xl 
              transition-all 
              duration-300 
              hover:bg-gray-400/40
              text-xs
              md:text-base
              `,
              isButtonActive === 'relation' && 'bg-gray-400/40'
            )}
          >
            Отношения
          </button>
          {isOpen === 'relation' && (
            <SortingPopUp selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          )}
        </div>
        {/* <form className="absolute right-0 space-x-3">
          <label htmlFor="">Сортировать по: </label>
          <select className="bg-transparent cursor-pointer text-gray-400">
            <option value="popularity">популярности</option>
            <option value="date">дате публикации</option>
          </select>
        </form> */}
      </section>
      <SelectedFilters
        filterItems={selectedFilters}
        handleClick={removeFilterItem}
      />
    </>
  );
};
