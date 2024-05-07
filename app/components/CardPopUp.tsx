'use client';

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';

import data from '@/app/constants/fanfictionCardMenu';
import Link from 'next/link';

interface CardPopUpProps {
  children: React.ReactNode;
}

const CardPopUp: React.FC<CardPopUpProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverButton>{children}</PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          className="
            absolute 
            right-0 
            top-10 
            flex 
            flex-col 
            space-y-2
            p-4
            rounded-xl 
            bg-gray-300/90 
            text-sm/6 
            [--anchor-gap:var(--spacing-5)]
          "
        >
          {data.map((item, index) => (
            <Link key={index} href="#" className="text-gray-800">
              {item.label}
            </Link>
          ))}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default CardPopUp;
