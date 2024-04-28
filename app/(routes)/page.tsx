import SearchQuery from '@/app/components/SearchQuery';
import SectionTitle from '@/app/components/SectionTitle';
import CategoriesSection from '@/app/components/CategoriesSection';
import FanFictionCardsContainer from '@/app/components/FanFictionCardsContainer';


export default function Home() {
  return (
    <main className="text-white relative z-10">
      <section className="h-[680px] relative">
        <div className="absolute inset-0 bg-[url('/bgImage4.png')] bg-no-repeat bg-cover bg-center opacity-45" />
        <section className="relative z-20 h-full text-white top-20 flex items-center justify-center">
          <SearchQuery
            className="
                w-[450px]
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
        </section>
      </section>
      <section className="max-w-[1240px] m-auto">
        <section className='pt-16'>
          <SectionTitle>Жанры и категории</SectionTitle>
          <CategoriesSection />
        </section>
        <section className='pt-16'>
          <SectionTitle>Популярные работы</SectionTitle>
          <FanFictionCardsContainer />
        </section>
      </section>
    </main>

    // <main className='space-y-16'>
    //   <section className="h-[600px] relative">
    //     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    //       <SearchQuery
    //         className="
    //             w-[450px]
    //           bg-white
    //             bg-opacity-30
    //             rounded-full
    //             py-2
    //             px-6
    //             outline-none
    //             transition-all
    //             duration-300
    //             focus:bg-opacity-60
    //             focus:shadow-md
    //             text-black
    //             text-semibold
    //           "
    //       />
    //     </div>
    //   </section>
    //   <section>
    //     <SectionTitle>Жанры и категории</SectionTitle>
    //     <CategoriesSection />
    //   </section>
    //   <section>
    //     <SectionTitle>Популярные работы</SectionTitle>
    //     <FanFictionCardsContainer />
    //   </section>
    // </main>
  );
}
