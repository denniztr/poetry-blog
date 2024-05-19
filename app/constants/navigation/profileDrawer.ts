import { CgProfile } from 'react-icons/cg';
import { TbBrandMessenger } from 'react-icons/tb';
import { BsPencil } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { FaJediOrder } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSignOutAlt } from "react-icons/fa";


const nav = [
  {
    label: 'Мой профиль',
    icon: CgProfile,
    path: '/authors'
  },
  {
    label: 'Сообщения',
    icon: TbBrandMessenger,
    path: '/'
  },
  {
    label: 'Для авторов',
    icon: BsPencil,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Добавить фанфик', href: '/fanfiction/add' },
      { label: 'Мои фанфики', href: '/fanfiction/add' },
      { label: 'Отзывы', href: '/fanfiction/add' },
      { label: 'Мой блог', href: '/fanfiction/add' },
    ],
  },
  {
    label: 'Для читателей',
    icon: FaBook,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Избранное', href: '/' },
      { label: 'Обсуждения', href: '/' },
      { label: 'Подписки', href: '/' },
      { label: 'Понравившиеся работы', href: '/' },
      { label: 'Прочитанные работы', href: '/' },
    ],
  },
  {
    label: 'Заявки',
    icon: FaJediOrder,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Добавить заявку', href: '/orders' },
      { label: 'Мои заявки', href: '/orders' },
      { label: 'Фанфики по моим заявкам', href: '/orders' },
      { label: 'Закладки', href: '/orders' },
    ],
  },
  {
    label: 'Поддержка',
    icon: MdOutlineContactSupport,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Служба поддержки', href: '/' },
      { label: 'Сообщить об ошибке', href: '/' },
    ],
  },
  {
    label: 'Выйти из профиля',
    icon: FaSignOutAlt,
  },
];

export default nav;
