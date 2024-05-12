export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section className='max-w-[1240px] m-auto relative top-20 px-6'>
      {children}
    </section>

  );
}