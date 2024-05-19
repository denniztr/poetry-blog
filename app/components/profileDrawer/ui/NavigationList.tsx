'use client'

import { useState } from 'react';
import nav from '@/app/constants/profileDrawerNavigation';
import NavigationItem from '@/app/components/profileDrawer/ui/NavigationItem';


const NavigationList = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <ul>
      {nav.map((item, index) => (
        <NavigationItem 
          key={index} 
          {...item} 
          open={openMenu}
          toggleMenu={setOpenMenu}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
