'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { SetStateAction } from 'react';

interface InputProps {
  placeholder?: string
  className?: string
  readOnly?: boolean
  setChosenCharacter: React.Dispatch<SetStateAction<string>>
  value: any
}

const Input: React.FC<InputProps> = ({
  placeholder,
  className: styles,
  readOnly,
  setChosenCharacter,
  value
}) => {


  return (
      <input
        onChange={(event) => setChosenCharacter(event?.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        className={clsx(
          `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white ${styles}`,
          `focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`,
        )}
      />
  );
};

export default Input;