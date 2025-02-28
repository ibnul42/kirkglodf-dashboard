"use client";

import { useHomeContext } from "@/app/context-api";


const CameraOption = () => {
  const { selectedCamera, setSelectedCamera, cameraRooms } = useHomeContext();

  return (
    <div className="flex gap-3">
      {cameraRooms.map((room) => (
        <button
          key={room}
          className={`px-5 py-3 rounded-full border border-[#ECECEC] shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] ${selectedCamera === room ? "bg-[#31ED93] text-white" : "text-[#9B9B9B]"
            }`}
          onClick={() => setSelectedCamera(room)}
        >
          {room}
        </button>
      ))}
    </div>
  );
};

export default CameraOption;
