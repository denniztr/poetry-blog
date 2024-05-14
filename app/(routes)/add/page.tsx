import SectionTitle from '@/app/components/SectionTitle';
import AddFicForm from '@/app/components/addFiction/AddFicForm';
import { FaInfo } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className='pb-12'>
      <SectionTitle>Добавить фанфик</SectionTitle>
      <section>
        <div
          className="
            flex 
            flex-col 
            gap-2 
            p-4 
            my-6 
            text-sm 
           text-gray-400 
           bg-yellow-800/50 
            rounded-xl 
            md:flex-row 
            md:justify-between 
            md:gap-0
          "
        >
          <p className="leading-5">
            Пожалуйста, ознакомьтесь с указаниями по размещению контента. <br />
            Прочтите простые инструкции, которые поясняют правила публикации на
            сайте.
          </p>
          <div className="flex items-center gap-1">
            <FaInfo size={15} />
            <button className="underline">Ознакомиться с правилами</button>
          </div>
        </div>
        <AddFicForm />
      </section>
    </main>
  );
}
