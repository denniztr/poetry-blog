import Link from 'next/link';

import CategoryList from './ui/categoryList';

import categories from '@/app/mockdata/categories';
import relations from '@/app/mockdata/relation';
import genres from '@/app/mockdata/genres';
import fandoms from '@/app/mockdata/fandoms';


const CategoriesSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-6">
      <div className="space-y-10">
          <Link href="/">
            <h3 className="text-gray-200">Категории</h3>
          </Link>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <CategoryList key={index} {...category} />
          ))}
        </ul>
      </div>
      <div className="space-y-10">
        <Link href="/">
          <h3 className="text-gray-200">Жанры</h3>
        </Link>
        <ul className="space-y-2">
          {genres.map((genre, index) => (
            <CategoryList key={index} {...genre} />
          ))}
        </ul>
      </div>
      <div className="space-y-10">
        <Link href="/">
          <h3 className="text-gray-200">Отношения</h3>
        </Link>
        <ul className="space-y-2">
          {relations.map((relation, index) => (
            <CategoryList key={index} {...relation} />
          ))}
        </ul>
      </div>
      <div className="space-y-10">
          <Link href="/">
            <h3 className="text-gray-200">Популярные фандомы</h3>
          </Link>
        <ul className="space-y-2">
          {fandoms.map((fandom, index) => (
            <CategoryList key={index} {...fandom} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSection;
