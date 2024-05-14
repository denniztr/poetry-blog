'use client';

import { UseFormRegister, FieldValues } from 'react-hook-form';


type Authorship = 'author' | 'translation'; 
type FictionType = 'original' | 'fandom';
type Rating = 'g' | 'pg-13' | 'r' | 'nc-17' | 'nc-21';

interface RadioInputProps {
  children: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  name: string
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
  handleClick
}) => {
  return (
    <label>
      <input 
        className='mr-2'
        type="radio" 
        {...register(name, { required: true })}
        name={name}
        value={value}
        readOnly={readOnly}
        checked={checked}
        onClick={() => handleClick(value as Authorship | FictionType | Rating, name)}
      />
      {children}
    </label>
  );
};

export default RadioInput;
