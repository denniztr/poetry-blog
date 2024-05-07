'use client';

import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

import clsx from 'clsx';

interface SortingPopUpProps {
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  selectedFilters: string[];
  options: string[];
}

const SortingPopUp: React.FC<SortingPopUpProps> = ({
  setSelectedFilters,
  selectedFilters,
  options,
}) => {
  
  const handleClick = (option: string) => {
    setSelectedFilters((prevOption) => {
      if (prevOption.includes(option)) {
        return prevOption.filter((el) => el !== option);
      }
      return [...prevOption, option];
    });
  };

  return (
      <div className="absolute mt-2 p-4 bg-gray-300/95 rounded-md shadow-2xl z-10 border border-gray-400">
        <ul className="space-y-3 text-gray-800">
          {options?.map((option, index) => (
            <li key={index}>
              <button
                className={clsx(
                  `
                hover:underline
              `,
                  selectedFilters.includes(option) && 'text-rose-800 underline'
                )}
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default SortingPopUp;
