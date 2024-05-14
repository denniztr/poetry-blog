'use client'


import { UseFormRegister, FieldValues } from 'react-hook-form';
import clsx from 'clsx';


interface TextareaProps {
  register: UseFormRegister<FieldValues>
  id: string
}

const Textarea: React.FC<TextareaProps> = ({ register, id }) => {
  return (
    <textarea 
      {...register(id, { required: true })}
      className={clsx(
        'block min-h-[200px] w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white',
        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
      )}
    />
  )
};

export default Textarea;