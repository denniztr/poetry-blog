interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <svg height="100" width="800">
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
      >
        {children}
      </text>
    </svg>
  );
};

export default SectionTitle;
