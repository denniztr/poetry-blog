import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();

  const router = useMemo(
    () => [
      {
        label: 'Добавить часть',
        path: `part`,
        variant: 'ADD_PART',
        active: pathname === '/fanfiction'
      },
      {
        label: 'Содержание',
        path: 'content',
        variant: 'ADD_CONTENT',
        active: pathname === '/authors'
      },
      {
        label: 'Обложка',
        path: 'cover',
        variant: 'ADD_COVER',
        active: pathname.startsWith('/fanfiction/add')
      },
      {
        label: 'Шапка',
        path: 'header',
        variant: 'ADD_HEADER',
        active: pathname.startsWith('/fanfiction/add')
      },
      {
        label: 'Cтатистика',
        path: 'statistic',
        variant: 'STATISTIC',
        active: pathname === '/orders'
      },
      {
        label: 'Страница работы',
        path: '#',
        active: pathname === '/wiki'
      },
    ], [pathname]
  )

  return router
}

export default useRoutes;