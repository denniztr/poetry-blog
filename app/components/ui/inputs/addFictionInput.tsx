'use client';


import { useEffect, SetStateAction } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps {
  placeholder?: string
  className?: string
  readOnly?: boolean
  setChosenCharacter?: React.Dispatch<SetStateAction<string>>
  value?: string
  register: UseFormRegister<FieldValues>
  id: string
  setChosenTags: React.Dispatch<SetStateAction<string>>
  // setValue?: UseFormSetValue<FieldValues>
  // chosenCharacters: string[]
}

const Input: React.FC<InputProps> = ({
  placeholder,
  className: styles,
  readOnly,
  setChosenCharacter,
  value,
  register,
  id,
  setChosenTags
  // setValue,
  // chosenCharacters
}) => {

  // useEffect(() => {
  //   // Устанавливаем значение chosenCharacters в register
  //   setValue(id, chosenCharacters); // Установка значения массива с персонажами в register
  // }, [chosenCharacters, id, setValue]);

  return (
      <input
        id={id}
        {...register(id, { required: true })}
        // onChange={(event) => setChosenCharacter(event?.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        // value={value}

        className={clsx(
          `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white ${styles}`,
          `focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`,
        )}
      />
  );
};

export default Input;