import { useEffect, useState } from "react";

const useCountDown = (tripStart?: string) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (tripStart) {
        const startDate = new Date(new Date(tripStart).toLocaleDateString())
        const now = new Date();
        const difference = startDate.getTime() - now.getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });

        if (difference <= 0) {
          clearInterval(interval);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }
    }, 1000);

    return () => {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(interval)
    };
  }, [tripStart]);

  return countdown;
}

export default useCountDown;