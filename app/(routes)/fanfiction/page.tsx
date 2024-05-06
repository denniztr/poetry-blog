import Selector from '@/app/components/Selector';
import FanFictionCardsContainer from '@/app/components/FanFictionCardsContainer';

export default function Home() {
  return (
    <main className="text-white">
      <Selector />
      <section className='w-full'>
        <FanFictionCardsContainer />
      </section>
    </main>
  );
}
