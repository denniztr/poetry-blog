import { IoNotificationsOutline } from "react-icons/io5";

const Notification = () => {
  return (
    <div className="relative">
      <IoNotificationsOutline 
        size={25} 
        className="cursor-pointer"
      />
      <div className="absolute w-[10px] h-[10px] bg-orange-500 rounded-full top-0 right-0"></div>
    </div>
  )
}

export default Notification;