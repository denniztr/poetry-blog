'use client';

interface SidebarItemProps {
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label }) => {
  return (
    <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
      <span className="py-4 px-6 inline-block whitespace-nowrap">{label}</span>
    </li>
  );
};

export default SidebarItem;
