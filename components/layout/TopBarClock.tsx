"use client";

import { useEffect, useState } from "react";

export default function TopBarClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="w-full bg-blue-300 text-black text-sm py-2 px-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <span className="hidden sm:block">
          {formattedDate}
        </span>

        <span className="font-medium tracking-wide">
          {formattedTime}
        </span>

      </div>
    </div>
  );
}