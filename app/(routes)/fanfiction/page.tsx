import SectionTitle from '@/app/components/SectionTitle';
import Selector from '@/app/components/Selector';
import FanFictionCardsContainer from '@/app/components/FanFictionCardsContainer';
import SearchQuery from '@/app/components/SearchQuery';


export default function Home() {
  return (
    <main className="text-white">
      <SearchQuery
        className='
          w-full
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
        '
      />
      <SectionTitle>Все книги</SectionTitle>
      <Selector />
      <section className='w-full relative'>
        <FanFictionCardsContainer />
      </section>
    </main>
  );
}
