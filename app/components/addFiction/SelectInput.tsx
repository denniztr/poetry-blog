'use client'


import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { IoIosArrowDown } from "react-icons/io";

import Input from '@/app/components/ui/inputs/addFictionInput';
import clsx from 'clsx';

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

  return (
    <div className="w-full relative z-10" id={id} onClick={() => handleClick(id)}>
      <Input className='cursor-pointer' placeholder={placeholder} readOnly={true}/>
      <IoIosArrowDown size={23} className={clsx(`absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer transition-all duration-500 `, 
        isOpen && '-rotate-180'
        )}
      />
      <Transition
          show={isOpen === id}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
            {(ref) => (
              <div ref={ref} className='absolute p-4 bg-white rounded-b w-full h-[100px] text-black z-20'>список</div>
            )}
      </Transition>
    </div>
  )
}

export default Select;