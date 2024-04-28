import SectionTitle from '@/app/components/SectionTitle';
import FanFictionCardsContainer from '@/app/components/FanFictionCardsContainer';

export default function Home() {
  return (
    <main className='text-white'>
      <SectionTitle>Все книги</SectionTitle>
      <section className='h-full'>
        <FanFictionCardsContainer />
      </section>
    </main>
  );
}