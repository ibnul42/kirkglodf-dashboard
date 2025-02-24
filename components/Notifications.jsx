import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";

const Notifications = () => {
  const [showList, setShowList] = useState(false);
  const buttonRef = useRef(); 
  const notificationRef = useClickOutside(() => setShowList(false), buttonRef);

  const notifications = [
    { id: 1, message: "Temperature changed", time: "19 Feb, 14:30" },
    { id: 2, message: "Camera was turned off", time: "23 Feb, 12:15" },
    { id: 3, message: "Animal deteccted", time: "18 Feb, 18:45" },
    { id: 4, message: "Meeting scheduled in Living romm", time: "18 Feb, 10:20" },
  ];

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setShowList(prev => !prev);
  };

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={handleButtonClick}>
        <Image src='/assets/icons/notification.svg' width={500} height={500} alt='' className='w-8 h-auto' />
      </button>

      {/* Notification List */}
      {showList && (
        <div ref={notificationRef} className="absolute right-0 mt-2 w-64 bg-white shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] rounded-lg p-3 z-10">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm">No notifications</p>
          ) : (
            <ul>
              {notifications.map((notif) => (
                <li key={notif.id} className="p-2 border-b last:border-none">
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-gray-400">Received on {notif.time}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
