'use client';

import { SetStateAction, useEffect, useState } from 'react';
import { UseFormSetValue, UseFormRegister, FieldValues } from 'react-hook-form';
import { IoIosArrowDown } from 'react-icons/io';

import relations from '@/app/mockdata/relation';
import access from '@/app/constants/data/publicationAccess';

import clsx from 'clsx';

type SelectVariant = 'group' | 'fandom' | 'character' | 'relation' | 'access';

interface SelectInputProps {
  placeholder?: string;
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
  id: SelectVariant;
  state: string;
  dispatch: React.Dispatch<SetStateAction<string>>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  setValue,
  placeholder,
  register,
  id,
  state,
  dispatch,
}) => {
  const [isOpen, setIsOpen] = useState<SelectVariant | null>(null);

  useEffect(() => {
    setValue(id, state);
  }, [state, id, setValue]);

  const handleClick = (id: SelectVariant) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div className="w-full relative " id={id} onClick={() => handleClick(id)}>
      <input
        placeholder={placeholder}
        {...register(id, { required: true })}
        readOnly
        className={clsx(
          `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white cursor-pointer`,
          `focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`
        )}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-3">
        <IoIosArrowDown
          size={23}
          className={clsx(
            ` text-gray-400 cursor-pointer transition-all duration-200`,
            isOpen && 'rotate-180'
          )}
        />
      </div>
      {isOpen && (
        <ul className="absolute bg-white/60 rounded-b w-full text-black z-50">
          {isOpen === 'access' &&
            access.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30"
                onClick={() => dispatch(item.label)}
              >
                {item.label}
              </li>
            ))}
          {isOpen === 'relation' &&
            relations.map((item, index) => (
              <li
                key={index}
                className="py-2 pl-6 cursor-pointer transition-all duration-300 hover:bg-white/30"
                onClick={() => dispatch(item.label)}
              >
                <span className={item.style}>{item.label}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
