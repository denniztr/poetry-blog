'use client';

import { useState, SetStateAction } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '@/app/components/ui/authInput';
import axios from 'axios';


interface AuthFormProps {
  setVariant: React.Dispatch<SetStateAction<string>>;
  variant: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ setVariant, variant }) => {


  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      axios.post('/api/register', data)
      .then((cb) => console.log(cb))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))

    } else if (variant === 'LOGIN') {
      signIn('credentials', {...data, redirect: false})
      .then((cb) => { console.log(cb) })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
    }
  }

  const toggleVariant = () => {
    if (variant === 'REGISTER') {
      setVariant('LOGIN');
    } else if (variant === 'LOGIN') {
      setVariant('REGISTER');
    }
  };

  return (
    <div className="h-full mt-6">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {variant === 'REGISTER' && (
          <Input 
            placeholder='Имя пользователя'
            id='name'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          )}
          <Input 
            placeholder='Электронная почта'
            id='email'
            type='email'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input 
            placeholder='Пароль'
            id='password'
            type='password'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        <div className="text-center pt-2">
          <button className="text-gray-300" type='submit'>
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
