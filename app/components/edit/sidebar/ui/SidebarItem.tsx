'use client';

import { SetStateAction } from "react";

interface SidebarItemProps {
  label: string;
  dispatch: React.Dispatch<SetStateAction<string>>
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, dispatch }) => {
  return (
    <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300" onClick={() => dispatch(label)}>
      <span className="py-4 px-6 inline-block whitespace-nowrap">{label}</span>
    </li>
  );
};

export default SidebarItem;
