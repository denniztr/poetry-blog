'use client';

import { SetStateAction, useEffect } from 'react';

import { MdClear } from 'react-icons/md';

interface SelectedFiltersProps {
  filterItems: string[];
  handleClick: (filterItem: string) => void;
}

const SelectedFilters: React.FC<SelectedFiltersProps> = ({ filterItems, handleClick }) => {

  return (
    <section className="absolute pt-4 w-full">
      <div className="text-gray-400">
        <ul className="flex space-x-5">
          {filterItems?.map((filterItem, index) => (
            <li key={index} className="flex items-center  space-x-2">
              <button 
                className='text-red-800 transition-all duration-300 hover:text-red-600' 
                onClick={() => handleClick(filterItem)}
              >
                <MdClear />
              </button>
              <span>{filterItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SelectedFilters;
