'use client';

import { useState, useEffect, useRef } from 'react';

import SortingPopUp from '@/app/components/SortingPopUp';

import clsx from 'clsx';


interface SelectorItemProps {
  label: string;
  options: string[];
}

const SelectorItem: React.FC<SelectorItemProps> = (filter) => {
  const { label, options } = filter;

  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [isButtonActive, setIsButtonActive] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (isOpen === label && popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(null);
      setIsButtonActive(null);
    }
  }

  const togglePopup = (popupType: string) => {
    setIsOpen(isOpen === popupType ? null : popupType);
    setIsButtonActive(isButtonActive === popupType ? null : popupType);
  };


  return (
      <div 
        ref={popupRef}
        className="relative"
      >
        <button
          onClick={() => togglePopup(label)}
          className={clsx(
            `
              text-xs
              py-2
              px-4
              border
              border-gray-600
              rounded-xl
              transition-all
              duration-300
              hover:bg-gray-500/40
            `,
            isButtonActive === label  && 'bg-gray-400/40'
          )}
        >
          {label}
        </button>
        {selectedFilters.length !== 0 && (
          <div 
            className="
              absolute 
              inline-block 
              h-6 
              w-6 
              bg-rose-800 
              shadow-xl 
              rounded-full 
              -top-3 
              -right-1 
              cursor-pointer 
              transition-all 
              duration-300 
              hover:bg-rose-700
              "
            >
            <span className="text-sm text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {selectedFilters.length}
            </span>
          </div>
        )}
        {isOpen === label && (
          <SortingPopUp
            options={options}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        )}
      </div>
  );
};

export default SelectorItem;
