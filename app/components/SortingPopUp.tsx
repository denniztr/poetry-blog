
export default function SortingPopUp() {
  return (
    <div className="fixed mt-5 p-4 bg-gray-300/95 rounded-md shadow-2xl z-10 border border-gray-400">
      <ul className="space-y-3 text-gray-800">
        <li>
          <button className="hover:underline">Короткий текст</button>
        </li>
        <li>
          <button className="hover:underline">
          Текст подлиннее
          </button>
        </li>
        <li>
          <button className="hover:underline">Текст ещё длиннее чем предыдущие</button>
        </li>
      </ul>
    </div>
  )
}