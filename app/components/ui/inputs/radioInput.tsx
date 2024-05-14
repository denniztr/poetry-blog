'use client';

import { UseFormRegister, FieldValues } from 'react-hook-form';

type Authorship = 'author' | 'translation';
type FictionType = 'original' | 'fandom';
type Rating = 'g' | 'pg-13' | 'r' | 'nc-17' | 'nc-21';

interface RadioInputProps {
  children: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  name: string;
  value: string;
  readOnly?: boolean;
  checked: boolean;
  handleClick: (value: Authorship | FictionType | Rating, name: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
  children,
  register,
  name,
  value,
  readOnly,
  checked,
  handleClick,
}) => {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        className="mr-2 sr-only peer"
        type="radio"
        {...register(name, { required: true })}
        name={name}
        value={value}
        readOnly={readOnly}
        checked={checked}
        onClick={() =>
          handleClick(value as Authorship | FictionType | Rating, name)
        }
      />
      <div
        className="
          w-4 
          h-4 
          bg-transparent 
          border-2 
          border-gray-400
          rounded-full
         peer-checked:bg-gray-400
         peer-checked:border-gray-400
          peer-hover:shadow-sm 
        peer-hover:shadow-gray-400
          transition 
          duration-300 
          ease-in-out"
      />
      <span className="ml-2">{children}</span>
    </label>
  );
};

export default RadioInput;
