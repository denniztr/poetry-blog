'use client';

interface MenuButtonProps {
  isOpen?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen }) => {
  const genericHamburgerLine = `h-[1.5px] w-6 my-[1.5px] rounded-full bg-white transition ease transform duration-300`;

  return (
    <button className="h-8 w-8 flex flex-col justify-center items-center group">
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-[4.3px] opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-[5px] opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default MenuButton;