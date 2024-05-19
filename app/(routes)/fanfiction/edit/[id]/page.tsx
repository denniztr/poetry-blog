import getFictionById from '@/app/actions/getFictionById';

import Sidebar from '@/app/components/edit/sidebar/Sidebar';
import EditPart from '@/app/components/edit/form/EditPart';
import AddFicForm from '@/app/components/addFiction/AddFicForm';
import EditCover from '@/app/components/edit/form/EditCover';

import Content from '@/app/components/edit/Content';

export default async function Home({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const publication = await getFictionById(id);

  return (
    <main className="text-white">
      <div>
        <h2 className="text-4xl">{publication?.title}</h2>
      </div>
      <Content />
    </main>
  );
}
