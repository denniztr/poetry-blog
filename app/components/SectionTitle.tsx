import clsx from 'clsx';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const dynamicTitleStyles = () => {
    if (children === 'Жанры и категории') {
      return 'text-[32px] md:text-6xl xl:text-7xl';
    } else if (children === 'Популярные работы') {
      return 'text-[30px] md:text-6xl xl:text-7xl';
    } else if (children === 'Все книги') {
      return 'text-4xl md:text-6xl xl:text-7xl';
    }

    return 'text-[32px] md:text-6xl xl:text-7xl';
  };

  return (
    <div>
      <svg width="100%" height="100">
        <defs>
          <filter id="text-shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="black" />
          </filter>
        </defs>

        <text
          x="0"
          y="70"
          fontFamily="Arial"
          className={dynamicTitleStyles()}
          fontWeight="700"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="bevel"
          fill="transparent"
          filter="url(#text-shadow)"
        >
          {children}
        </text>
      </svg>
    </div>
  );
};

export default SectionTitle;
