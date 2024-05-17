import getFictionById from "@/app/actions/getFictionById";

export default async function Home({ params }: { params: {id: string}}) {
    const { id } = params;
    const publication = await getFictionById(id);

  return (
    <main className='text-white'>
      <div>
        <h2 className="text-4xl">{publication?.title}</h2>
      </div>
      <section className="flex mt-4 gap-3 flex-col md:flex-row">
        <aside className="sticky top-3 border border-gray-700/30 bg-black/40 w-full md:w-[260px] h-[342px]">
          <ul className='divide-y-[1px] divide-gray-700/50 text-gray-400'>
          <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Добавить часть</span>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Содержание</span>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Обложка</span>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Шапка</span>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Статистика</span>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:bg-black/40 hover:text-gray-300">
              <span className="py-4 px-6 inline-block whitespace-nowrap">Страница работы</span>
            </li>
          </ul>
        </aside>
        <section className="w-full h-[1000px] border border-gray-700/30 bg-black/40 p-4">
          <h5 className="text-center text-gray-300 text-xl">Добавить часть</h5>
        </section>
      </section>
    </main>
  );
}