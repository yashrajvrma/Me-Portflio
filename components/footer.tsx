"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    const updateMumbaiTime = () => {
      const now = new Date();
      const mumbaiTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const timeString = mumbaiTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setMumbaiTime(timeString);
    };

    // Update time immediately
    updateMumbaiTime();

    // Update every minute
    const interval = setInterval(updateMumbaiTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-200">
      <div className="flex items-center gap-1">
        <span>📍</span>
        <span>Last updated on April 8, 2025</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
        <span>Mumbai, {mumbaiTime || "Loading..."}</span>
      </div>
    </div>
  );
}
