import { useEffect, useState } from "react";

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function ActiveCounter() {
  const startDate = new Date("2025-07-16T00:00:00");

  const calculateTime = (): Time => {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState<Time>(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center mb-8">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="bg-white/10 text-white px-4 py-3 rounded-lg text-center"
        >
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs uppercase">{label}</div>
        </div>
      ))}
    </div>
  );
}