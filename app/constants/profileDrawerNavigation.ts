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
  },
  {
    label: 'Сообщения',
    icon: TbBrandMessenger,
  },
  {
    label: 'Для авторов',
    icon: BsPencil,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Добавить фанфик', href: '#' },
      { label: 'Мои фанфики', href: '#' },
      { label: 'Отзывы', href: '#' },
      { label: 'Мой блог', href: '#' },
    ],
  },
  {
    label: 'Для читателей',
    icon: FaBook,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Избранное', href: '#' },
      { label: 'Обсуждения', href: '#' },
      { label: 'Подписки', href: '#' },
      { label: 'Понравившиеся работы', href: '#' },
      { label: 'Прочитанные работы', href: '#' },
    ],
  },
  {
    label: 'Заявки',
    icon: FaJediOrder,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Добавить заявку', href: '#' },
      { label: 'Мои заявки', href: '#' },
      { label: 'Фанфики по моим заявкам', href: '#' },
      { label: 'Закладки', href: '#' },
    ],
  },
  {
    label: 'Поддержка',
    icon: MdOutlineContactSupport,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Служба поддержки', href: '#' },
      { label: 'Сообщить об ошибке', href: '#' },
    ],
  },
  {
    label: 'Выйти из профиля',
    icon: FaSignOutAlt,
  },
];

export default nav;
