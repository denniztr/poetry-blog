'use client';

import { SetStateAction } from 'react';

import useRoutes from '@/app/hooks/useEditFictionNav';
import SidebarItem from '@/app/components/edit/sidebar/ui/SidebarItem';

type Variant =
  | 'ADD_PART'
  | 'ADD_CONTENT'
  | 'ADD_COVER'
  | 'ADD_HEADER'
  | 'STATISTIC'
  | 'WORK_PAGE';

interface SideBarProps {
  setVariant: React.Dispatch<SetStateAction<Variant>>;
  variant: Variant;
}

const Sidebar: React.FC<SideBarProps> = ({ setVariant, variant }) => {
  const routes = useRoutes();

  return (
    <aside className="block md:sticky md:top-3 border border-gray-700/30 bg-black/40 w-full md:w-[260px] h-[342px]">
      <ul className="divide-y-[1px] divide-gray-700/50 text-gray-400">
        {routes.map((item, index) => (
          <SidebarItem
            key={index}
            {...item}
            dispatch={setVariant}
            state={variant}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
