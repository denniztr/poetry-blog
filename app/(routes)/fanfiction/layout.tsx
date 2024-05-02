import SectionTitle from '@/app/components/SectionTitle';
import SearchQuery from '@/app/components/SearchQuery';


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section className='max-w-[1240px] m-auto px-6 relative top-20'>
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
      {children}
    </section>

  );
}