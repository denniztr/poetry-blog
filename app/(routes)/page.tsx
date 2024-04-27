import SearchQuery from '@/app/components/SearchQuery';
import SectionTitle from '@/app/components/SectionTitle';


export default function Home() {
  return (
    <main className='space-y-16'>
      <section className="h-[600px] relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SearchQuery
            className="
                w-[400px]
              bg-white
                bg-opacity-30
                rounded-full 
                py-2
                px-6
                outline-none
                transition-all
                duration-300
                focus:bg-opacity-60
                focus:shadow-md
                text-black
                text-semibold
              "
          />
        </div>
      </section>
      <section>
        <SectionTitle>Жанры и категории</SectionTitle>
        <div className='w-full h-80 flex justify-center items-center'>
          <h2>Категории</h2>
        </div>
      </section>
      <section>
        <SectionTitle>Популярные работы</SectionTitle>
        <div className='w-full h-80 flex justify-center items-center'>
          <h2>Карточки с популярными работами</h2>
        </div>
      </section>
    </main>
  );
}
