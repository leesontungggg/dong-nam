import * as React from "react";
import { useEffect, useState } from "react";

const useCountdown = (deadline: Date) => {
  // Time is in seconds
  const [time, setTime] = useState(
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  );

  const decrement = () =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1;
    });

  useEffect(() => {
    const id = setInterval(decrement, 1000);
    return () => clearInterval(id);
  }, []);

  const format = (num: number): string => {
    return num < 10 ? "0" + num : num.toString();
  };

  return {
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
  };
};

const Countdown = (props: any) => {
  const hour = 3.6e6; // 1 Hour in milliseconds
  const { numHours } = props; // Number of hours in the future
  const [deadline] = useState(new Date(Date.now() + numHours * hour));
  const time = useCountdown(deadline);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          {time.days} <br /> Days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          {time.hours} <br /> Hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          {time.minutes} <br /> Minutes
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          {time.seconds} <br /> Seconds
        </div>
      </div>
    </>
  );
};

export default Countdown;
