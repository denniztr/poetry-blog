import getFictionById from "@/app/actions/getFictionById";

export default async function Home({ params }: { params: {id: string}}) {
    const { id } = params;
    const publication = await getFictionById(id);

  return (
    <main className='pb-12 text-white'>
      продолжение публикации фанфика
      <h2>{publication?.title}</h2>
    </main>
  );
}