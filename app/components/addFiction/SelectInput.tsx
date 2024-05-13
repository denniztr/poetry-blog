'use client';


import { useEffect } from 'react';
import { SetStateAction, useState } from 'react';
import { Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import Input from '@/app/components/ui/inputs/addFictionInput';

import relations from '@/app/mockdata/relation';
import access from '@/app/constants/publicationAccess';
import clsx from 'clsx';

type SelectVariant = 'group' | 'fandom' | 'character' | 'relation' | 'access';

interface SelectProps {
  placeholder?: string;
  id: SelectVariant;
  setChosenRelation: React.Dispatch<SetStateAction<string>>;
  chosenRelation: string;
  setChosenAccessRules: React.Dispatch<SetStateAction<string>>;
  chosenAccessRules: string;
  setChosenGroup: React.Dispatch<SetStateAction<string>>;
  chosenGroup: string;
  setChosenFandom: React.Dispatch<SetStateAction<string>>;
  chosenFandom: string;
  setChosenCharacter: React.Dispatch<SetStateAction<string>>;
  chosenCharacter: string;
  register: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<FieldValues>
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  id,
  setChosenRelation,
  chosenRelation,
  setChosenAccessRules,
  chosenAccessRules,
  chosenGroup,
  chosenFandom,
  chosenCharacter,
  register,
  setValue
}) => {
  const [isOpen, setIsOpen] = useState<SelectVariant | null>(null);

  const handleClick = (id: SelectVariant) => {
    setIsOpen(isOpen === id ? null : id);
  };
  
  useEffect(() => {
    // Установка значения chosenRelation в register
    setValue(id, chosenRelation);
  }, [chosenRelation, id, setValue]);

  useEffect(() => {
    // Установка значения chosenRelation в register
    setValue(id, chosenAccessRules);
  }, [chosenAccessRules, id, setValue]);

  useEffect(() => {
    // Установка значения chosenRelation в register
    setValue(id, chosenGroup);
  }, [chosenGroup, id, setValue]);

  useEffect(() => {
    // Установка значения chosenRelation в register
    setValue(id, chosenCharacter);
  }, [chosenCharacter, id, setValue]);

  useEffect(() => {
    // Установка значения chosenRelation в register
    setValue(id, chosenFandom);
  }, [chosenFandom, id, setValue]);

  return (
    <div className="w-full relative" id={id} onClick={() => handleClick(id)}>
      <Input
        className="cursor-pointer"
        placeholder={placeholder}
        readOnly={true}
        // value={chosenRelation} 
        // setChosenCharacter={function (value: SetStateAction<string>): void {
        //   throw new Error('Function not implemented.');
        // } } 
        id={id}
        register={register}
      />
      <IoIosArrowDown
        size={23}
        className={clsx(
          `absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer transition-all duration-200`,
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
          <div
            ref={ref}
            className={clsx(`absolute bg-white/70 rounded-b w-full text-black`)}
          >
            <ul className="max-h-[160px] overflow-auto">
              {isOpen === 'relation' &&
                relations.map((relation, index) => (
                  <li
                    key={index}
                    className="py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30"
                    onClick={() => setChosenRelation(relation.label)}
                  >
                    <span className={relation.style}>{relation.label}</span>
                  </li>
                ))}
              {isOpen === 'access' &&
                access.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30"
                    onClick={() => setChosenAccessRules(item.label)}
                  >
                    {item.label}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Select;
