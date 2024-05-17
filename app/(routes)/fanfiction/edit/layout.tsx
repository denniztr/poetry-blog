export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <section>
      <div className="h-screen fixed inset-0 bg-[url('/bgImage4.png')] bg-no-repeat bg-cover bg-center opacity-[0.15]" />
      <section className='max-w-[1240px] m-auto relative'>
        {children}
      </section>
    </section>
  );
}