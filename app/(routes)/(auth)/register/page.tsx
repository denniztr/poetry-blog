'use client'

import { Redressed } from 'next/font/google';

import { useState } from 'react';

import AuthForm from '@/app/components/authorization/AuthForm';
import EmptyState from '@/app/components/EmptyState';

import clsx from 'clsx';

const redressed = Redressed({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const [variant, setVariant] = useState<string>('REGISTER');

  console.log(variant)
  return (
    <main className="relative h-screen">
      <section className='h-full max-w-[1240px] m-auto px-10 flex justify-center items-center'>
        <div className='w-full h-[500px] bg-black/40 shadow-xl  text-white flex flex-row'>
        <div className={clsx(`h-full bg-black w-1/2 flex items-center justify-center rounded-r-3xl`, variant === 'LOGIN' && 'order-2')}>
          <EmptyState variant={variant} />
        </div>
        <div className='w-full px-8 relative'>
          <h1 className={`text-3xl text-center pt-4 pb-10 ${redressed.className}`}>FicLibrary</h1>
          <h3 className={clsx(`text-center text-sm text-gray-400`, variant === 'LOGIN' && 'mt-10')}>
            {variant === 'REGISTER' ? 'Регистрация нового пользователя' : 'Войти в свой аккаунт'}
          </h3>
          <AuthForm  setVariant={setVariant} variant={variant} />
        </div>
        </div>
      </section>
    </main>
  );
}
