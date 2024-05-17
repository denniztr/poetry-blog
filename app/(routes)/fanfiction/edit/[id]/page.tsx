import getFictionById from "@/app/actions/getFictionById";

import EditFictionForm from "@/app/components/editFictionForm/Form";
import nav from '@/app/constants/editFictionNavigation';
import Sidebar from '@/app/components/edit/sidebar/Sidebar';


export default async function Home({ params }: { params: {id: string}}) {
    const { id } = params;
    const publication = await getFictionById(id);

  return (
    <main className='text-white'>
      <div>
        <h2 className="text-4xl">{publication?.title}</h2>
      </div>
      <section className="flex mt-4 gap-3 flex-col md:flex-row pb-6">
        <Sidebar />
        <section className="w-full border border-gray-700/30 bg-black/40 px-4 py-8 space-y-4">
          <h5 className="text-center text-gray-300 text-xl">Добавить часть</h5>
          <EditFictionForm />
        </section>
      </section>
    </main>
  );
}