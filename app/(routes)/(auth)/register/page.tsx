import AuthForm from '@/app/components/authorization/AuthForm';
import EmptyState from '@/app/components/EmptyState';



export default function Home() {
  return (
    <main className="relative h-screen">
      <section className='h-full max-w-[1240px] m-auto px-10 flex justify-center items-center'>
        <div className='bg-black/40 w-full h-[500px] shadow-xl  text-white flex flex-row'>
        <div className='h-full bg-black w-1/2 flex items-center justify-center rounded-r-3xl'>
          <EmptyState/>
        </div>
        <div className='w-full px-8 py-10 relative'>
          <h3 className='text-center'>Регистрация нового пользователя</h3>
          <AuthForm />
        </div>
        </div>
      </section>
    </main>
  );
}
