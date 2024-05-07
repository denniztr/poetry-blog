'use client';

import { useRouter } from 'next/navigation';

import { TiArrowBack } from 'react-icons/ti';


const EmptyState = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full relative">
      {/* <div>
        <span>Уже есть аккаунт?</span>
        <button>Войти</button>
      </div> */}
      <TiArrowBack size={30} className="absolute top-5 left-5 text-gray-300 cursor-pointer" onClick={() => router.back()}/>
    </div>
  );
};

export default EmptyState;
