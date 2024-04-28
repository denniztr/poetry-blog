'use client';

import Input from './ui/input';

interface SearchQueryProps {
  className: string,
}

const SearchQuery: React.FC<SearchQueryProps> = ({ className: style }) => {
  return (
    <Input
      type="text"
      placeholder='Поиск по сайту'
      className={style}
    />
  );
}

export default SearchQuery;
