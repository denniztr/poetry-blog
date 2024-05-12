'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps {
  placeholder?: string
  className?: string
  readOnly?: boolean
}

const Input: React.FC<InputProps> = ({
  placeholder,
  className: styles,
  readOnly
}) => {


  return (
      <input
        placeholder={placeholder}
        readOnly={readOnly}
        className={clsx(
          `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white ${styles}`,
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
        )}
      />
  );
};

export default Input;