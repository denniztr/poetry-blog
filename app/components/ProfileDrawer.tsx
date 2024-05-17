'use client';

import { Fragment } from 'react';

import { User } from '@prisma/client';

import { Dialog, Transition } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { signOut } from 'next-auth/react';

import Notification from '@/app/components/Notification';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  user,
}) => {


  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-br from-gray-200/90 via-gray-300/90 to-gray-400/90 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-end">
                          <div className="w-full ml-3 flex h-7 items-center justify-between">
                            <Notification />
                            <button
                              onClick={onClose}
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            >
                              <span className="sr-only">Close</span>
                              <IoClose size={22} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 px-4 sm:px-6">
                        <div className="flex flex-col items-center my-4">
                          <div className="mb-6 font-semibold">{user?.name}</div>
                        </div>
                        <div className='space-y-8'>
                          <div>
                            <ul className="space-y-2">
                              <li>Фанфики</li>
                              <li>Избранное</li>
                              <li>Опубликовать</li>
                              <li>Вики</li>
                              <li>Редактировать профиль</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p
                          className="cursor-pointer inline-block"
                          onClick={() => signOut()}
                        >
                          Выйти из профиля
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ProfileDrawer;
