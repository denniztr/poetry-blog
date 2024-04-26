import Header from '@/app/components/Header';
import BackgroundImage from '@/app/components/BackgroundImage';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <section>
    //   <BackgroundImage />
    //   <section className="w-full absolute top-0">
    //     <section className="max-w-[1290px] m-auto px-8">
    //       <Header />
    //       {children}
    //     </section>
    //   </section>
    // </section>


    // <section className="">
    //   <section className="bg-[url('/bgImage4.png')] w-full h-[700px] bg-no-repeat bg-cover">
    //     <section className="max-w-[1290px] m-auto px-8">
    //       <section className='w-full h-full'>
    //         <Header />
    //         {children}
    //       </section>
    //     </section>
    //   </section>
    // </section>


    <section className='relative'>
      <div className="absolute  bg-[url('/bgImage4.png')] w-full h-[700px] bg-no-repeat bg-cover opacity-40"/>
      <section className='absolute z-55 h-full w-full'>
        <section className='text-white max-w-[1290px] m-auto px-8"'>
         <Header />
         {children}
        </section>
      </section>
    </section>
  );
}
