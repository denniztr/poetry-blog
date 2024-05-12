'use client';

import { useState } from 'react';

import Input from '@/app/components/ui/inputs/addFictionInput';
import Button from '@/app/components/ui/buttons/ficFormButton';

type Authorship = 'author' | 'translation'; 

const AddFicForm = () => {
  const [authorship, setAuthorship] = useState<Authorship>('author')

  const toggleAuthorship = (value: Authorship) => {
    if (value !== authorship) {
      setAuthorship(value);
    }
    console.log(value)
  };

  console.log(authorship)

  return (
    <div className="w-full py-6 pr-6 pl-24">
      <form className=" text-white space-y-6">
        <div className="flex gap-6">
          <label>Авторство</label>
          <div className="flex flex-col">
            <label>
              <input type="radio" name="authorship" value='author' checked={authorship === 'author'} onClick={() => toggleAuthorship('author')} readOnly/>
              Работа Вашего авторства
            </label>
            <label>
              <input type="radio" name="authorship" value='translation' checked={authorship === 'translation'} onClick={() => toggleAuthorship('translation')} readOnly/>
              Перевод с другого языка (с разрешения автора оригинала)
            </label>
          </div>
        </div>
        {authorship !== 'author' && (
          <>
            <div className="space-y-2">
              <label>Имя автора</label>
              <div className="w-full">
                <Input placeholder='Имя автора оригинала'/>
              </div>
              </div>
              <div className="space-y-2">
                <label className='text-sm'>Ссылка на оригинал</label>
                <div className="w-full">
                  <Input placeholder='https://ссылка'/>
                </div>
              </div>
          </>
        )}
        <div className="space-y-2">
          <label>Название</label>
          <div className="w-full">
            <Input />
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
              <Input placeholder='Начните вводить имя' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFicForm;
