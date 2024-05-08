'use client';

import { useRouter } from 'next/navigation';

import { TiArrowBack } from 'react-icons/ti';

import clsx from 'clsx';

const EmptyState = ({ variant }) => {
  const router = useRouter();

  return (
    <div className="w-full h-full relative">
      <div className="h-full inset-0 bg-[url('/logo.png')] bg-no-repeat bg-cover bg-center opacity-45 z-0"/>
      <div className={clsx(`absolute top-5`, variant === 'LOGIN' ? 'right-5' : 'left-5')}>
        <TiArrowBack size={30} className="bg-black/40 rounded-lg z-55 text-gray-500 cursor-pointer" onClick={() => router.back()}/>
      </div>
    </div>
  );
};

export default EmptyState;
