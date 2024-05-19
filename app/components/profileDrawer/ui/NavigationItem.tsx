'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { AnimatePresence, motion } from 'framer-motion';

import clsx from 'clsx';

interface NavigationItemProps {
  label: string;
  icon: any;
  iconAfter?: any;
  subMenuItems?: { label: string; href: string; }[]; 
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  icon: Icon,
  iconAfter: IconAfter,
  subMenuItems,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className={clsx(`text-gray-800 px-4 py-3 sm:px-6 transition-all duration-300 hover:bg-gray-300/90 cursor-pointer`, isSubMenuOpen && 'bg-gray-300/90')}>
      <div className="flex items-center justify-between gap-6" onClick={handleSubMenuToggle}>
        <div className="flex items-center gap-6">
          <Icon className='h-5 w-5' />
          <Link href="#">{label}</Link>
        </div>
        {IconAfter && <IconAfter className={clsx(`h-5 w-5`, isSubMenuOpen && 'rotate-180')}/>}
      </div>
      <AnimatePresence>
        {isSubMenuOpen && subMenuItems && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 pl-10"
          >
            {subMenuItems.map((item, index) => (
              <li key={index} className="py-2 transition-all duration-300 hover:bg-gray-400/90">
                <Link href={item.href} className="text-gray-600 hover:text-gray-800">{item.label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavigationItem;
