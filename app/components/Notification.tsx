import { IoNotificationsOutline } from "react-icons/io5";

const Notification = () => {
  return (
    <div className="relative">
      <IoNotificationsOutline 
        size={25} 
        className="cursor-pointer text-gray-700"
      />
      <div className="absolute w-[9px] h-[9px] bg-orange-500 rounded-full top-0 right-[2px]"></div>
    </div>
  )
}

export default Notification;