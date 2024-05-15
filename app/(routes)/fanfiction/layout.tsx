export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='max-w-[1240px] m-auto px-6 relative top-20'>
      {children}
    </section>
  );
}
