import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";

const data = [
  {
    label: 'Нравится',
    icon: CiHeart,
  },
  {
    label: 'Подписаться',
    icon: CiBookmarkPlus,
  },
  {
    label: 'Прочитано',
    icon: IoBookOutline,
  },
  {
    label: 'В избранное',
    icon: CiStar,
  },
  {
    label: 'Скрыть',
    icon: CiUnread
  }
];

export default data;