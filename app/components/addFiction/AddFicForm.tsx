'use client';

import { useState, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import TextInput from '@/app/components/ui/inputs/textInput';
import Textarea from '@/app/components/ui/inputs/textarea';
import RadioInput from '@/app/components/ui/inputs/radioInput';

import Input from '@/app/components/ui/inputs/addFictionInput';
import Button from '@/app/components/ui/buttons/ficFormButton';
import Select from '@/app/components/addFiction/SelectInput';

import ratings from '@/app/constants/rating';

import { FaPlus } from "react-icons/fa";

import clsx from 'clsx';


type Authorship = 'author' | 'translation'; 
type FictionType = 'original' | 'fandom';
type Rating = 'g' | 'pg-13' | 'r' | 'nc-17' | 'nc-21';


const AddFicForm = () => {
  const [authorship, setAuthorship] = useState<Authorship>('author');
  const [fictionType, setFictionType] = useState<FictionType>('original');
  const [selectedRating, setSelectedRating] = useState<Rating>('g');

  const [chosenCharacter, setChosenCharacter] = useState<string>('');
  const [chosenCharacters, setChosenCharacters] = useState<string[]>([]);
  const [chosenRelation, setChosenRelation] = useState<string>('');
  const [chosenAccessRules, setChosenAccessRules] = useState<string>('');
  const [chosenGroup, setChosenGroup] = useState<string>('');
  const [chosenFandom, setChosenFandom] = useState<string>('');
  const [chosenTag, setChosenTag] = useState<string>('');
  const [chosenTags, setChosenTags] = useState<string[]>([]);


  const handleChooseCharacterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (chosenCharacter.trim().length > 0) {
      setChosenCharacters(prevCharacters => [...prevCharacters, chosenCharacter.trim()]);
      setChosenCharacter('');
    }
  }

  const handleChooseTagClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (chosenTag.trim().length > 0) {
      setChosenTags(prevTag => [...prevTag, chosenTag.trim()]);
      setChosenTag('');
    }
  }


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      authorship: '',
      title: '',
      author: '',
      link: '',
      coAuthor: '',
      type: '',
      fandom: '',
      group: '',
      characters: '',
      rating: '',
      relationships: '',
      tags: '',
      description: '',
      notes: '',
      access: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log(values)
  }


  const toggleRadioButton = (value: Authorship | FictionType | Rating, name: string) => {
    if (name === 'authorship') {
      setAuthorship(value)
    } else if (name === 'type') {
      setFictionType(value)
    } else if (name === 'rating') {
      setSelectedRating(value)
    }
  }

  return (
    <div className="w-full py-6 md:pr-6 md:pl-24">
      <form className=" text-gray-300 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <label>Авторство</label>
          <div className="flex flex-col">
            <RadioInput 
              register={register} 
              name="authorship" 
              value='author'
              checked={authorship === 'author'}
              handleClick={toggleRadioButton} 
              readOnly
            >
              Работа Вашего авторства
            </RadioInput>
            <RadioInput 
              register={register} 
              name="authorship" 
              value='translation'
              checked={authorship === 'translation'}
              handleClick={toggleRadioButton} 
              readOnly
            >
              Перевод с другого языка (с разрешения автора оригинала)
            </RadioInput>
          </div>
        </div>
        {authorship !== 'author' && (
          <>
            <div className="space-y-2">
              <label>Имя автора <span className='text-red-600'>*</span></label>
              <div className="w-full">
                <TextInput placeholder='Имя автора оригинала' register={register} id='author' />
              </div>
              </div>
              <div className="space-y-2">
                <label className='text-sm'>Ссылка на оригинал  <span className='text-red-600'>*</span></label>
                <div className="w-full">
                  <TextInput placeholder='https://ссылка' register={register} id='link' />
                </div>
              </div>
          </>
        )}
        <div className="space-y-2">
          <label>Название</label>
          <div className="w-full">
            <TextInput placeholder='Название произведения' register={register} id='title' />
          </div>
        </div>
        <div className="flex gap-6">
          <label>Добавить</label>
          <div className="w-full flex flex-col gap-3">
            <div className="space-x-3">
              <Button>Соавтора</Button>
              <Button>Бетту</Button>
              <Button>Гамму</Button>
            </div>
            <div>
              <Input placeholder='Начните вводить имя' register={register} id='coAuthor'/>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <label className='w-20'>Тип работы</label>
          <div className="flex flex-col">
            <RadioInput 
                register={register} 
                name="type" 
                value='original'
                checked={fictionType === 'original'}
                handleClick={toggleRadioButton} 
                readOnly
              >
                Ориджинал
              </RadioInput>
              <RadioInput 
                register={register} 
                name="type" 
                value='fandom'
                checked={fictionType === 'fandom'}
                handleClick={toggleRadioButton} 
                readOnly
              >
                Фанфик по фандому
              </RadioInput>
          </div>
        </div>
        {/* <div className={clsx(`space-y-2`, fictionType === 'fandom' && 'hidden')}>
          <label>Персонажи</label>
            <div className="w-full relative">
              <Input register={register} placeholder='Добавляйте персонажей по одному' setChosenCharacter={setChosenCharacter} chosenCharacters={chosenCharacters}/>
              {chosenCharacter.length > 0 && (
                <div className='absolute top-1/2 -translate-y-1/2 right-3  bg-white/50 py-1 px-2 rounded-md transition-all duration-300 hover:bg-white/30'>
                  <button className='flex items-center gap-1 text-white text-xs md:text-sm' onClick={handleChooseCharacterClick}>
                    <FaPlus />
                    Добавить
                  </button>
                </div>
              )}
            </div>
            <div className='flex space-x-3'>
              {chosenCharacters && chosenCharacters.length > 0 && (
                chosenCharacters.map((char, index) => (
                  <p key={index}>{char}</p>
                ))
              )}
            </div> 
        </div> */}
        {fictionType === 'fandom' && (
          <>
            <div className="space-y-2">
              <label className='text-sm'>Выберите фандом  <span className='text-red-600'>*</span></label>
              <Select setValue={setValue} register={register} placeholder='Выберите группу' id='group' setChosenGroup={setChosenGroup} chosenGroup={chosenGroup} />
              <Select setValue={setValue} register={register} placeholder='Укажите фандом' id='fandom' setChosenFandom={setChosenFandom} chosenFandom={chosenFandom}/>
            </div>
            <div className="space-y-2">
              <label>Персонажи</label>
              <Select setValue={setValue} register={register} placeholder='Выберите персонажей по одному' id='character' setChosenCharacter={setChosenCharacter} chosenCharacter={chosenCharacter}/>
            </div>
          </>
        )} 
         <div className="flex gap-6">
          <label className='w-20'>Рейтинг</label>
          <div className="flex flex-col">
            {ratings.map((rating, index) => (
              <RadioInput 
                key={index} 
                register={register}
                name="rating" 
                value={rating.label}
                checked={rating.label === selectedRating}
                handleClick={toggleRadioButton} 
                readOnly
              >
                {rating.label.toUpperCase()}
              </RadioInput>
              // <label key={index}>
              //   <input className='mr-2' {...register('rating')} type='radio' name='rating' value={rating.label} checked={rating.label === selectedRating} onClick={() => toggleRating(rating.label as Rating)} readOnly/>
              //   {rating.label.toUpperCase()}
              // </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label>Отношения</label>
          <Select 
            setValue={setValue}
            placeholder='Выберите отношения' 
            id='relation' 
            register={register}
            setChosenRelation={setChosenRelation} 
            chosenRelation={chosenRelation} 
          />
        </div> 
        <div className="space-y-2">
          <label>Метки</label>
          <div className="w-full relative">
            <Input placeholder='Начните вводить...' register={register} id='tags' chosenTag={chosenTags} setChosenTags={setChosenTags} />
            <div className='absolute top-1/2 -translate-y-1/2 right-3  bg-white/50 py-1 px-2 rounded-md transition-all duration-300 hover:bg-white/30'>
                  <button className='flex items-center gap-1 text-white text-xs md:text-sm'>
                    <FaPlus />
                    Добавить
                  </button>
                </div>
          </div>
          <span className='text-xs text-gray-400'>Ключевые слова, которые характеризуют происходящее в работе.</span>
        </div>
        <div className="space-y-2">
          <label>Короткое описание работы</label>
          <div className="w-full">
            <div>
              <Textarea 
                register={register}
                id='description'
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Примечания</label>
          <div className="w-full">
            <div>
              <Textarea 
                register={register}
                id='notes'
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Разрешение на публикацию</label>
          {/* fix */}
          <Select 
            setValue={setValue}
            placeholder='Варианты' 
            id='access' 
            register={register}
            setChosenAccessRules={setChosenAccessRules} 
            chosenAccessRules={chosenAccessRules} 
          />
          <span className='text-xs text-gray-400'>Разрешение публикации на других ресурсах.</span>
        </div> 
        <div className='w-full text-center space-y-6'>
          <div>
            <input type="checkbox" className="h-4 w-4"/>
            <span className='pl-2 text-sm text-gray-400'>Я подтверждаю, что публикуемый перевод выполнен мной с иностранного языка, а разрешение на перевод получено у автора, и понимаю, что публикация чужих работ может привести к блокировке доступа на сайт.</span>
          </div>
          <Button disabled={false} type='submit'>Сохранить и перейти к публикации</Button>
        </div>
      </form>
    </div>
  );
};

export default AddFicForm;
