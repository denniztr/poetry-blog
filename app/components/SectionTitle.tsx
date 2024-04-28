interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
  <svg height="100" width="800">

      <defs>
        <filter id="text-shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="black" />
        </filter>
      </defs>
      

      <text
        x="10"
        y="70"
        fontFamily="Arial"
        fontSize="68"
        fontWeight='700'
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="bevel" 
        fill="transparent"
        filter="url(#text-shadow)"
      >
        {children}
      </text>
    </svg>
  );
};

export default SectionTitle;
