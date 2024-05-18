'use client';

import { SetStateAction } from 'react';
import clsx from 'clsx';

type Variant =
  | 'ADD_PART'
  | 'ADD_CONTENT'
  | 'ADD_COVER'
  | 'ADD_HEADER'
  | 'STATISTIC'
  | 'WORK_PAGE';

interface SidebarItemProps {
  label: string;
  variant: string;
  dispatch: React.Dispatch<SetStateAction<Variant>>;
  state: Variant;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  variant,
  dispatch,
  state,
}) => {
  return (
    <li
      className={clsx(
        `
        cursor-pointer 
        transition-all 
        duration-300 
        hover:bg-black/80 
        hover:text-gray-300
      `,
        variant === state && 'bg-black/80 text-gray-300 font-semibold'
      )}
      onClick={() => dispatch(variant as Variant)}
    >
      <span className="py-4 px-6 inline-block whitespace-nowrap">{label}</span>
    </li>
  );
};

export default SidebarItem;
