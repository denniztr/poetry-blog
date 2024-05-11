'use client';

import { useState, SetStateAction, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Input from '@/app/components/ui/authInput';
import AuthSocialButtons from '@/app/components/authorization/SocialButtons';
import axios from 'axios';


interface AuthFormProps {
  setVariant: React.Dispatch<SetStateAction<string>>;
  variant: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ setVariant, variant }) => {
  const session = useSession();
  const router = useRouter();


  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/')
    }
  }, [router, session.status])

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
  };

  const toggleVariant = () => {
    if (variant === 'REGISTER') {
      setVariant('LOGIN');
    } else if (variant === 'LOGIN') {
      setVariant('REGISTER');
    }
  };

  return (
    <div className="h-full">
      <form className="space-y-4 pt-4 pb-8" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="text-center">
          <button className="text-gray-300" type='submit'>
            {variant === 'REGISTER' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </div>
      </form>
      <AuthSocialButtons variant={variant}/>
      <div className='relative h-28 text-sm text-gray-400'>
        <p>
          {variant === 'REGISTER' ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
          <a className='hover:underline cursor-pointer ml-2' onClick={toggleVariant}>{variant === 'REGISTER' ? 'Войти' : 'Зарегистрироваться'}</a>
        </p>
        {variant === 'REGISTER' && (
            <p className="absolute bottom-0 text-[10px] text-gray-500 text-center">
              Регистрируясь, вы соглашаетесь с Правилами сайта, Пользовательским
              соглашением и Политикой в отношении обработки персональных данных
            </p>
          )}
      </div>
    </div>
  );
};

export default AuthForm;
