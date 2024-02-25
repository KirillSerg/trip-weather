import { useAtomValue } from "jotai";
import { activeTripAtom, upcomingTripAtom } from "../../Store";
import useCountDown from "./useCountDown";
import "./CountDown.css";

const CountDown = () => {
  const activeTrip = useAtomValue(activeTripAtom);
  const upcomingTrip = useAtomValue(upcomingTripAtom);

  const { days, hours, minutes, seconds } = useCountDown(
    activeTrip?.startDate || upcomingTrip?.startDate
  );

  return (
    <div className="counter">
      <span className="timeItem">
        {days}
        <span>Days</span>
      </span>
      <span className="timeItem">
        {hours}
        <span>Hours</span>
      </span>
      <span className="timeItem">
        {minutes}
        <span>Minutes</span>
      </span>
      <span className="timeItem">
        {seconds}
        <span>Seconds</span>
      </span>
    </div>
  );
};

export default CountDown;
