import Link from 'next/link';

import CategoryList from './ui/categoryList';

import categories from '@/app/mockdata/categories';
import relations from '@/app/mockdata/relation';
import genres from '@/app/mockdata/genres';
import fandoms from '@/app/mockdata/fandoms';


const CategoriesSection = () => {
  return (
    <section 
      className='
        w-full
        grid
        space-y-6
        sm:grid-cols-1
        sm:space-y-4
        md:grid-cols-2
        md:space-y-0
        md:gap-6
        xl:grid-cols-4
      '
    >
      <div className='space-y-6'>
        <Link href='/' className='text-center xl:text-left'>
          <h3 className='text-gray-200'>Категории</h3>
        </Link>
         <ul className="space-y-2">
            {categories.map((category, index) => (
              <CategoryList key={index} {...category} />
            ))}
          </ul>
      </div>
      <div className='space-y-6'>
        <Link href='/' className='text-center xl:text-left'>
          <h3 className='text-gray-200'>Жанры</h3>
        </Link>
        <ul className="space-y-2">
          {genres.map((genre, index) => (
            <CategoryList key={index} {...genre} />
          ))}
        </ul>
      </div>
      <div className='space-y-6'>
        <Link href='/' className='text-center xl:text-left'>
          <h3 className='text-gray-200'>Отношения</h3>
        </Link>
        <ul  className="space-y-2">
          {relations.map((relation, index) => (
            <CategoryList key={index} {...relation} />
          ))}
        </ul>
      </div>
      <div className='space-y-6'>
        <Link href='/' className='text-center xl:text-left'>
          <h3 className='text-gray-200'>Популярные фандомы</h3>
        </Link>
        <ul  className="space-y-2">
          {fandoms.map((fandom, index) => (
            <CategoryList key={index} {...fandom} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSection;
