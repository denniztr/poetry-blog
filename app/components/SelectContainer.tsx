'use client'

import { SelectLabel, SelectOption } from '@/app/components/ui/selectTest';

import genres from '../mockdata/genres';
import relations from '../mockdata/relation';
import categories from '../mockdata/categories';


export default function SelectContainer() {
  return (
    <>
    <section className="flex flex-wrap justify-between py-6">
      <form>
        <SelectLabel className="pr-3">Сортировать по:</SelectLabel>
        <select className="bg-transparent text-gray-400 cursor-pointer border-xl focus:outline-none">
          <SelectOption value="popularity">популярности</SelectOption>
          <SelectOption value="date">дате добавления</SelectOption>
        </select>
      </form>
      <form>
        <SelectLabel className="pr-3">Отношения:</SelectLabel>
        <select className="bg-transparent text-gray-400 cursor-pointer border-xl focus:outline-none">
        {relations.map((relation, index) => (
            <SelectOption key={index}> {relation.label} </SelectOption>
          ))}
        </select>
      </form>
      <form>
        <SelectLabel className="pr-3">Жанры:</SelectLabel>
        <select className="bg-transparent text-gray-400 cursor-pointer border-xl focus:outline-none">
          {genres.map((genre, index) => (
            <SelectOption key={index}> {genre.label} </SelectOption>
          ))}
        </select>
      </form>
      <form>
        <SelectLabel className="pr-3">Категории:</SelectLabel>
        <select className="bg-transparent text-gray-400 cursor-pointer border-xl focus:outline-none">
        {categories.map((category, index) => (
            <SelectOption key={index}> {category.label} </SelectOption>
          ))}
        </select>
      </form>
    </section>
    <section className='text-sm'>
      Выбранные категории
    </section>
    </>
  );
}
