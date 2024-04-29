'use client'


import genres from '@/app/mockdata/genres';

interface SortingPopUpProps {
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const SortingPopUp: React.FC<SortingPopUpProps> = ({ setSelectedFilters }) => {

  const handleClick = (label: string) => {
    setSelectedFilters((prevLabel) => [...(prevLabel || []), label])
  }

  return (
    <div className="fixed mt-5 p-4 bg-gray-300/95 rounded-md shadow-2xl z-10 border border-gray-400">
      <ul className="space-y-3 text-gray-800">
        {genres.map((genre, index) => (
          <li key={index}>
            <button className='hover:underline' onClick={() => handleClick(genre.label)}>{genre.label}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SortingPopUp;