import Header from '@/app/components/Header';
import getCurrentUser from '@/app/actions/getCurrentUser';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <Header currentUser={currentUser} />
      <section className="relative z-10">{children}</section>
    </section>
  );
}
