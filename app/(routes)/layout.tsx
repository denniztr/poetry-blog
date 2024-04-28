import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <section className="relative z-10">{children}</section>
    </section>
  );
}
