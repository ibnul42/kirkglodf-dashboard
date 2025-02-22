import { useState, useEffect } from "react";

const RecordingTimer = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [time, setTime] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds into HH : MM : SS format
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="text-lg text-white text-center shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)]">
      {hours} : {minutes} : {seconds}
    </div>
  );
};

export default RecordingTimer;
