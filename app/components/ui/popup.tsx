'use client';

import { useState } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';


import {
  Transition,
  Popover,
  PopoverPanel
} from '@headlessui/react';

interface PopUpPros {
  isOpen?: Boolean;
  children?: React.ReactNode;
}

const PopUp: React.FC<PopUpPros> = ({ isOpen, children }) => {

  return (
    <Popover className=''>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverPanel>
          {children}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default PopUp;
