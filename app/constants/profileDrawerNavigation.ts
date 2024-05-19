import { CgProfile } from 'react-icons/cg';
import { TbBrandMessenger } from 'react-icons/tb';
import { BsPencil } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { FaJediOrder } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

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
      { label: 'Вариант 1', href: '#1' },
      { label: 'Вариант 2', href: '#2' },
    ],
  },
  {
    label: 'Для читателей',
    icon: FaBook,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Вариант 1', href: '#1' },
      { label: 'Вариант 2', href: '#2' },
    ],
  },
  {
    label: 'Заявки',
    icon: FaJediOrder,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Вариант 1', href: '#1' },
      { label: 'Вариант 2', href: '#2' },
    ],
  },
  {
    label: 'Поддержка',
    icon: MdOutlineContactSupport,
    iconAfter: IoIosArrowDown,
    subMenuItems: [
      { label: 'Вариант 1', href: '#1' },
      { label: 'Вариант 2', href: '#2' },
    ],
  },
];

export default nav;
