'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import socialButtons from '@/app/constants/data/socialButtons';

import clsx from 'clsx';

interface AuthSocialButtonsProps {
  variant: string
}

const AuthSocialButtons: React.FC<AuthSocialButtonsProps> = ({ variant }) => {

  const socialAction = (action: string) => {
    signIn(action, {redirect: false})
    .then((cb) => console.log(cb))
    .catch((error) => console.log(error))
  }

  return (
    <div className={clsx(`flex items-center justify-between`, variant === 'LOGIN' && 'mt-10')}>
      <h3 className="text-sm text-gray-400">
        {variant === 'REGISTER' ? 'Регистрация через социальные сети' : 'Войти через социальные сети'}
      </h3>
      <div className='flex gap-2'>
        {socialButtons.map((socialButton, index) => (
          <div 
            key={index} 
            className='relative h-10 w-10 cursor-pointer opacity-60 transition duration-300 hover:opacity-75'
            onClick={() => socialAction(socialButton.type)}
          >
            <Image src={socialButton.image} alt={socialButton.alt} fill />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuthSocialButtons;