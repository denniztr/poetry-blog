'use client';

import Link from 'next/link';

interface NavigationItemProps {
  label: string;
  // icon: any;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  // icon: Icon,
}) => {
  return (
    <li className="flex items-center gap-3 text-gray-800 px-4 py-3 sm:px-6 transition-all duration-300 hover:bg-gray-300/90 cursor-pointer">
      <Link href="#">{label}</Link>
    </li>
  );
};

export default NavigationItem;
