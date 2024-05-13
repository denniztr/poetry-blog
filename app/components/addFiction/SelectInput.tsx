'use client'

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { IoIosArrowDown } from "react-icons/io";

import Input from '@/app/components/ui/inputs/addFictionInput';

import relations from '@/app/mockdata/relation';
import access from '@/app/constants/publicationAccess';
import clsx from 'clsx';

type SelectVariant = 'group' | 'fandom' | 'character' | 'relation' | 'access'

interface SelectProps {
  placeholder?: string
  id: SelectVariant
}

const Select: React.FC<SelectProps> = ({ placeholder, id }) => {
  const [isOpen, setIsOpen] = useState<SelectVariant | null>(null);
  const [chosenRelation, setChosenRelation] = useState<string>();
  console.log(chosenRelation)
  const handleClick = (id: SelectVariant) => {
    setIsOpen(isOpen === id ? null : id)
  }

  return (
    <div className="w-full relative" id={id} onClick={() => handleClick(id)}>
      <Input className='cursor-pointer' placeholder={placeholder} readOnly={true} />
      <IoIosArrowDown size={23} className={clsx(`absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer transition-all duration-200`, 
        isOpen && 'rotate-180'
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
              <div ref={ref} className={clsx(`absolute bg-white/70 rounded-b w-full text-black`)}>
                <ul className='max-h-[160px] overflow-auto'>
                {isOpen === 'relation' && (
                  relations.map((relation, index) => (
                      <li key={index} className='py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30' onClick={() => setChosenRelation(relation.label)} >
                        <span className={relation.style}>{relation.label}</span>
                      </li>
                  ))
                )}
                {isOpen === 'access' && (
                  access.map((item, index) => (
                    <li key={index} className='py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30'>
                      {item.label}
                    </li>
                  ))
                )}
                </ul>
              </div>
            )}
      </Transition>
    </div>
  )
}

export default Select;