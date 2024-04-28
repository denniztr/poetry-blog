import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BackgroundImage from '@/app/components/BackgroundImage';

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    // <section className='relative'>
    //   <div className="absolute bg-[url('/bgImage4.png')] w-full h-[700px] bg-no-repeat bg-cover opacity-40"/>
    //   <section className='absolute h-full w-full'>
    //     <section className='text-white max-w-[1290px] m-auto px-8 bg-rose-400/30'>
    //      <Header />
    //      {children}
    //     </section>
    //   </section>
    // </section>
    <section>
      <Header />
      <section className="relative z-10">
        {children}
      </section>
    </section>

  );
}
