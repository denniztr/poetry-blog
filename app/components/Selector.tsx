'use client';

import useFilter from '@/app/hooks/useGetFilters';
import SelectorItem  from './ui/select';

export default function Selector() {
  const filters = useFilter();

  return (
    <section 
      className="
        pb-14
        flex
        items-center
        justify-between
        md:justify-start
        md:gap-4
      "
    >
      {filters.map((filter, index) => (
         <SelectorItem key={index} {...filter} />
      ))}
    </section>
  );
}
