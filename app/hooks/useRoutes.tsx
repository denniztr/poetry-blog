import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();

  const router = useMemo(
    () => [
      {
        label: 'Фанфики',
        path: '/fanfiction',
        active: pathname === '/fanfiction'
      },
      {
        label: 'Авторы',
        path: '/authors',
        active: pathname === '/authors'
      },
      {
        label: 'Опубликовать',
        path: '/fanfiction/add',
        active: pathname.startsWith('/fanfiction/add')
      },
      {
        label: 'Ордеры',
        path: '/orders',
        active: pathname === '/orders'
      },
      {
        label: 'Вики',
        path: '/wiki',
        active: pathname === '/wiki'
      },
    ], [pathname]
  )

  return router
}

export default useRoutes;