import Link from 'next/link';
import Selector from '@/app/components/Selector';

import SelectContainer from '@/app/components/SelectContainer';
import FanFictionCardsContainer from '@/app/components/FanFictionCardsContainer';


export default function Home() {
  return (
    <main className="text-white">
      <Selector />
      <section>
      <FanFictionCardsContainer />
      </section>
    </main>
  );
}
