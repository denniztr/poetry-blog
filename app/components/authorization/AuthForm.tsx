'use client';

import Input from '@/app/components/ui/input';
import clsx from 'clsx';


const AuthForm = () => {
  return (
    <div className="h-full mt-16">
      <form className="space-y-4">
        <Input
          className={clsx(
            'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder="Электронная почта"
        />
        <Input
          className={clsx(
            'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder="Имя пользователя"
        />
        <Input
          className={clsx(
            'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder="Пароль"
        />
        <div className='text-center pt-10 space-y-16'>
          <button>Зарегистрироваться</button>
          <p className='text-sm text-gray-500'>Регистрируясь, вы соглашаетесь с Правилами сайта, Пользовательским соглашением и Политикой в отношении обработки персональных данных</p>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
