'use client'

import { useState } from 'react';
import nav from '@/app/constants/navigation/profileDrawer';
import NavigationItem from '@/app/components/profileDrawer/ui/NavigationItem';


const NavigationList = ({ onClose } : { onClose: () => void}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <ul>
      {nav.map((item, index) => (
        <NavigationItem 
          key={index} 
          {...item} 
          open={openMenu}
          toggleMenu={setOpenMenu}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default NavigationList;
