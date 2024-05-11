'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps {
  placeholder: string
  id: string
  type?: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  placeholder,
  id,
  type,
  register,
  errors,
  disabled
}) => {


  return (
    <div>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required: true })}
        className={clsx(
          'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          errors[id] && 'focus:ring-rose-500',
          disabled && 'opacity-50 cursor-default'
        )}
      />
    </div>
  );
};

export default Input;
