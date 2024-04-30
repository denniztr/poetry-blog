'use client';

import genres from '@/app/mockdata/genres';
import clsx from 'clsx';

interface SortingPopUpProps {
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  selectedFilters: string[];
}

const SortingPopUp: React.FC<SortingPopUpProps> = ({
  setSelectedFilters,
  selectedFilters,
}) => {
  const handleClick = (label: string) => {
    setSelectedFilters((prevLabel) => {
      if (prevLabel.includes(label)) {
        return prevLabel.filter((el) => el !== label);
      }
      return [...prevLabel, label];
    });
  };

  return (
    <div className="absolute  mt-5 p-4 bg-gray-300/95 rounded-md shadow-2xl z-10 border border-gray-400">
      <ul className="space-y-3 text-gray-800">
        {genres?.map((genre, index) => (
          <li key={index}>
            <button
              className={clsx(
                `
                hover:underline
                font-[500]
              `,
                selectedFilters.includes(genre.label) && 'text-rose-800 underline'
              )}
              onClick={() => handleClick(genre.label)}
            >
              {genre.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingPopUp;
