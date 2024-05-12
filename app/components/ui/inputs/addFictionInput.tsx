'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps {
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  placeholder,
}) => {


  return (
      <input
        placeholder={placeholder}
        className={clsx(
          'block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
        )}
      />
  );
};

export default Input;