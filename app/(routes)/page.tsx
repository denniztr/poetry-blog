import SearchQuery from '@/app/components/SearchQuery';

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
      <section className=' text-white'>
        <h1 className='text-white text-xl font-semibold tracking-wide text-center'>Категории</h1>
        <div className='h-[400px] bg-gray-300/30'>

        </div>
      </section>

    </main>
  );
}
