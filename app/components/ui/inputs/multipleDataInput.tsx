'use client';

import { useEffect, useState } from 'react';
import { UseFormSetValue, FieldValues } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';

import clsx from 'clsx';

interface MultipleDataInputProps {
  placeholder: string;
  id: string;
  setValue: UseFormSetValue<FieldValues>;
}

const MultipleDataInput: React.FC<MultipleDataInputProps> = ({
  placeholder,
  id,
  setValue,
}) => {
  const [chosenCharacter, setChosenCharacter] = useState<string>('');
  const [chosenCharacters, setChosenCharacters] = useState<string[]>([]);
  const [chosenTag, setChosenTag] = useState<string>('');
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const [chosenCollaborator, setChosenCollaborator] = useState<string>('');
  const [chosenCollaborators, setChosenCollaborators] = useState<string[]>([]);

  useEffect(() => {
    setValue(id, chosenCharacters);
  }, [id, chosenCharacters, setValue]);

  useEffect(() => {
    setValue(id, chosenTags);
  }, [id, chosenTags, setValue]);

  useEffect(() => {
    setValue(id, chosenCollaborators);
  }, [id, chosenCollaborators, setValue]);

  const handleClick = (id: string) => {
    event?.preventDefault();
    if (id === 'characters' && chosenCharacter.trim().length > 0) {
      setChosenCharacters((prevCharacters) => [...prevCharacters, chosenCharacter.trim()]);
      setChosenCharacter('');
    } else if (id === 'tags' && chosenTag.trim().length > 0) {
      setChosenTags((prevTag) => [...prevTag, chosenTag.trim()]);
      setChosenTag('');
    } else if (id === 'collaborators' && chosenCollaborator.trim().length > 0) {
      setChosenCollaborators((prevCollaborator) => [...prevCollaborator, chosenCollaborator.trim()])
      setChosenCollaborator('')
    }
  };

  return (
    <div className="w-full" id={id}>
      <div className="relative">
        <input
          onChange={(e) => {
            if (id === 'characters') {
              setChosenCharacter(e?.target.value);
            } else if (id === 'tags') {
              setChosenTag(e?.target.value);
            } else if (id === 'collaborators') {
              setChosenCollaborator(e?.target.value)
            }
          }}
          placeholder={placeholder}
          type="text"
          className={clsx(
            `block w-full h-10 rounded-lg border-none bg-white/20 py-1.5 px-3 text-sm/6 text-white`,
            `focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25`
          )}
        />

        <div className="absolute top-1/2 -translate-y-1/2 right-3  bg-white/50 py-1 px-2 rounded-md transition-all duration-300 hover:bg-white/30">
          <button
            className="flex items-center gap-1 text-white text-xs md:text-sm"
            onClick={() => handleClick(id)}
          >
            <FaPlus />
            Добавить
          </button>
        </div>
      </div>
      {id === 'tags' && (
        <span className="text-xs text-gray-400">
          Ключевые слова, которые характеризуют происходящее в работе.
        </span>
      )}
      <div className="flex space-x-3 mt-4">
        {chosenCharacters &&
          chosenCharacters.length > 0 &&
          chosenCharacters.map((char, index) => <p key={index}>{char}</p>)}
        {chosenTags &&
          chosenTags.length > 0 &&
          chosenTags.map((tag, index) => <p key={index}>{tag}</p>)}
        {chosenCollaborators &&
          chosenCollaborators.length > 0 &&
          chosenCollaborators.map((collaborator, index) => <p key={index}>{collaborator}</p>)}
      </div>
    </div>
  );
};

export default MultipleDataInput;
