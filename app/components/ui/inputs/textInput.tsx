'use client'

import { FieldValues, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';


interface TextInputProps {
  placeholder: string
  register: UseFormRegister<FieldValues>
  id: string
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, register, id }) => {
  return (
    <input 
      placeholder={placeholder}
      {...register(id, { required: true })}
      id={id}
      className={clsx(
        `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white`,
        `focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`,
      )}
    />
  )
}

export default TextInput;