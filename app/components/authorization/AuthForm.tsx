'use client';

import Input from '@/app/components/ui/input';
import clsx from 'clsx';
import { SetStateAction } from 'react';

interface AuthFormProps {
  setVariant: React.Dispatch<SetStateAction<string>>
  variant: string
}

const AuthForm: React.FC<AuthFormProps> = ({ setVariant, variant }) => {


  const toggleVariant = () => {
    if (variant === 'REGISTER') {
      setVariant('LOGIN');
    } else if (variant === 'LOGIN') {
      setVariant('REGISTER');
    }
  };

  return (
    <div className="h-full mt-6">
      <form className="space-y-4">
        {variant === 'REGISTER' && (
          <Input
            className={clsx(
              'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            placeholder="Имя пользователя"
          />
        )}
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
          placeholder="Пароль"
        />
        <div className="text-center pt-2">
          <button className='text-gray-300'>
            {variant === 'REGISTER' ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <p className="pt-4 pb-24 text-gray-500 text-sm">
            {variant === 'REGISTER' ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
            <a
              className="hover:underline ml-2 cursor-pointer"
              onClick={toggleVariant}
            >
              {variant === 'REGISTER' ? 'Войти' : 'Зарегистрироваться'}
            </a>
          </p>
          {variant === 'REGISTER' && (
            <p className="text-[10px] text-gray-500">
              Регистрируясь, вы соглашаетесь с Правилами сайта, Пользовательским
              соглашением и Политикой в отношении обработки персональных данных
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
