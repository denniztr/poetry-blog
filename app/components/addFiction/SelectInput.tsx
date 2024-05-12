'use client'


import { useState } from 'react';

import Input from '@/app/components/ui/inputs/addFictionInput';

import { IoIosArrowDown } from "react-icons/io";


type SelectVariant = 'group' | 'fandom' | 'character' | 'relation' | 'access'


interface SelectProps {
  placeholder?: string
  id: SelectVariant
}

const Select: React.FC<SelectProps> = ({ placeholder, id }) => {
  const [isOpen, setIsOpen] = useState<SelectVariant | null>(null);

  const handleClick = (id: SelectVariant) => {
    setIsOpen(isOpen === id ? null : id)
  }
  console.log(isOpen)
  return (
    <div className="w-full relative" id={id} onClick={() => handleClick(id)}>
      <Input className='cursor-pointer' placeholder={placeholder}/>
      <IoIosArrowDown size={23}  className='absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer'/>
      {isOpen === id && (
        <div className='absolute p-4 bg-gray-400 rounded-b w-full h-[100px] text-black'>список</div>
      )}
    </div>
  )
}

export default Select;