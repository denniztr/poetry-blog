'use client';

import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import TextInput from '@/app/components/ui/inputs/textInput';
import Textarea from '@/app/components/ui/inputs/textarea';
import RadioInput from '@/app/components/ui/inputs/radioInput';
import SelectInput from '@/app/components/ui/inputs/selectInput';
import MultipleDataInput from '@/app/components/ui/inputs/multipleDataInput';
import Button from '@/app/components/ui/buttons/ficFormButton';

import ratings from '@/app/constants/data/rating';

import axios from 'axios';
import clsx from 'clsx';

type Authorship = 'author' | 'translation';
type FictionType = 'original' | 'fandom';
type Rating = 'g' | 'pg-13' | 'r' | 'nc-17' | 'nc-21';

const AddFicForm = () => {
  const router = useRouter();

  const [authorship, setAuthorship] = useState<Authorship>('author');
  const [fictionType, setFictionType] = useState<FictionType>('original');
  const [selectedRating, setSelectedRating] = useState<Rating>('g');

  const [chosenCharacter, setChosenCharacter] = useState<string>('');
  const [chosenRelation, setChosenRelation] = useState<string>('');
  const [chosenAccessRules, setChosenAccessRules] = useState<string>('');
  const [chosenGroup, setChosenGroup] = useState<string>('');
  const [chosenFandom, setChosenFandom] = useState<string>('');


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      authorship: '',
      title: '',
      // author: '',
      originalAuthor: '',
      link: '',
      // collaborators: [],
      type: '',
      fandom: '',
      group: '',
      characters: [],
      rating: '',
      relationships: '',
      tags: [],
      description: '',
      notes: '',
      access: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    console.log('onSubmit: ', values)

      axios.post('/api/fiction/add', values)
      .then((cb) => {
        console.log('the data has been sent: ', cb)
        if (cb?.status === 201) {
          router.push(`/fanfiction/edit/${cb.data.id}`)
        }
      })
      .catch((error) => console.log('error: ', error))

  };

  const toggleRadioButton = (
    value: Authorship | FictionType | Rating,
    name: string
  ) => {
    if (name === 'authorship') {
      setAuthorship(value as Authorship);
    } else if (name === 'type') {
      setFictionType(value as FictionType);
    } else if (name === 'rating') {
      setSelectedRating(value as Rating);
    }
  };

  return (
    <div className="w-full py-6 md:pr-6 md:pl-24 z-40">
      <form
        className=" text-gray-300 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-6">
          <label>Авторство</label>
          <div className="flex flex-col">
            <RadioInput
              register={register}
              name="authorship"
              value="author"
              checked={authorship === 'author'}
              handleClick={toggleRadioButton}
              readOnly
            >
              Работа Вашего авторства
            </RadioInput>
            <RadioInput
              register={register}
              name="authorship"
              value="translation"
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
              <label>
                Имя автора <span className="text-red-600">*</span>
              </label>
              <div className="w-full">
                <TextInput
                  placeholder="Имя автора оригинала"
                  register={register}
                  id="originalAuthor"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">
                Ссылка на оригинал <span className="text-red-600">*</span>
              </label>
              <div className="w-full">
                <TextInput
                  placeholder="https://ссылка"
                  register={register}
                  id="link"
                />
              </div>
            </div>
          </>
        )}
        <div className="space-y-2">
          <label>Название</label>
          <div className="w-full">
            <TextInput
              placeholder="Название произведения"
              register={register}
              id="title"
            />
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
            {/* <div>
              <MultipleDataInput
                placeholder="Начните вводить имя"
                id="collaborators"
                setValue={setValue}
              />
            </div> */}
          </div>
        </div>
        <div className="flex gap-6">
          <label className="w-20">Тип работы</label>
          <div className="flex flex-col">
            <RadioInput
              register={register}
              name="type"
              value="original"
              checked={fictionType === 'original'}
              handleClick={toggleRadioButton}
              readOnly
            >
              Ориджинал
            </RadioInput>
            <RadioInput
              register={register}
              name="type"
              value="fandom"
              checked={fictionType === 'fandom'}
              handleClick={toggleRadioButton}
              readOnly
            >
              Фанфик по фандому
            </RadioInput>
          </div>
        </div>
        <div
          className={clsx(`space-y-2`, fictionType === 'fandom' && 'hidden')}
        >
          <label>Персонажи</label>
          <MultipleDataInput
            placeholder="Добавляйте персонажей по одному"
            id="characters"
            setValue={setValue}
          />
        </div>
        {fictionType === 'fandom' && (
          <>
            <div className="space-y-2">
              <label className="text-sm">
                Выберите фандом <span className="text-red-600">*</span>
              </label>
              <SelectInput
                placeholder="Выберите группу"
                setValue={setValue}
                register={register}
                id="group"
                state={chosenGroup}
                dispatch={setChosenGroup}
              />
              <SelectInput
                placeholder="Укажите фандом"
                setValue={setValue}
                register={register}
                id="fandom"
                state={chosenFandom}
                dispatch={setChosenFandom}
              />
            </div>
            <div className="space-y-2">
              <label>Персонажи</label>
              <SelectInput
                placeholder="Добавляйте персонажей по одному"
                setValue={setValue}
                register={register}
                id="character"
                state={chosenCharacter}
                dispatch={setChosenCharacter}
              />
            </div>
          </>
        )}
        <div className="flex gap-6">
          <label className="w-20">Рейтинг</label>
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
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label>Отношения</label>
          <SelectInput
            setValue={setValue}
            placeholder="Выберите отношения"
            id="relation"
            register={register}
            state={chosenRelation}
            dispatch={setChosenRelation}
          />
        </div>
        <div className="space-y-2">
          <label>Метки</label>
          <MultipleDataInput
            placeholder="Начните вводить..."
            id="tags"
            setValue={setValue}
          />
        </div>
        <div className="space-y-2">
          <label>Короткое описание работы</label>
          <div className="w-full">
            <div>
              <Textarea register={register} id="description" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Примечания</label>
          <div className="w-full">
            <div>
              <Textarea register={register} id="notes" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label>Разрешение на публикацию</label>
          <SelectInput
            placeholder="Варианты"
            setValue={setValue}
            register={register}
            id="access"
            state={chosenAccessRules}
            dispatch={setChosenAccessRules}
          />
          <span className="text-xs text-gray-400">
            Разрешение публикации на других ресурсах.
          </span>
        </div>
        <div className="w-full text-center space-y-6">
          <div className="flex">
            <label className="">
              <input
                className="peer cursor-pointer hidden after:opacity-100"
                type="checkbox"
              />
              <span
                className="
                    inline-block 
                    w-5 
                    h-5 
                    border-2 
                    relative 
                    cursor-pointer 
                    after:content-[''] 
                    after:absolute 
                    after:top-2/4 
                    after:left-2/4 
                    after:-translate-x-1/2 
                    after:-translate-y-1/2 
                    after:w-[10px] 
                    after:h-[10px] 
                    after:bg-white 
                    after:rounded-[2px] 
                    after:opacity-0 
                    peer-checked:after:opacity-100"
              ></span>
            </label>
            <span className="pl-2 text-sm text-gray-400">
              Я подтверждаю, что публикуемый перевод выполнен мной с
              иностранного языка, а разрешение на перевод получено у автора, и
              понимаю, что публикация чужих работ может привести к блокировке
              доступа на сайт.
            </span>
          </div>
          <Button disabled={false} type="submit">
            Сохранить и перейти к публикации
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFicForm;
