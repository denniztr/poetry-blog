import SearchQuery from '@/app/components/SearchQuery';

export default function Home() {
  return (
    <main className='h-full'>
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
      <section className=' text-white'>
        Случайные Фанфики
      </section>
    </main>
  );
}
