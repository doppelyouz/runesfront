import { useState } from "react";
import { useEffect } from "react";
const CountdownTimer = ({ expirationDate, cl }) => {
    const [timeLeft, setTimeLeft] = useState('');
  
    useEffect(() => {
      const updateCountdown = () => {
        let now = new Date()
        now = new Date(now.getTime() + now.getTimezoneOffset()*60000)
        const expiration = new Date(expirationDate);
  
        const diff = expiration - now;
  
        if (diff <= 0) {
          setTimeLeft('00:00:00');
          return;
        }
  
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
  
        setTimeLeft(`${formattedHours}:${formattedMinutes}`);
      };
  
      const intervalId = setInterval(updateCountdown, 1000);
  
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [expirationDate]);
  
    return <p className={cl}>{timeLeft}</p>;
  };
  
export default CountdownTimer