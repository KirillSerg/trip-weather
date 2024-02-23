import { useAtomValue } from "jotai";
import "./CountDown.css";
import { onSelectTripAtom } from "../../Store";
import useCountDown from "./useCountDown";

const CountDown = () => {
  const selectedTrip = useAtomValue(onSelectTripAtom);
  const { days, hours, minutes, seconds } = useCountDown(
    selectedTrip?.startDate
  );

  return (
    <div className="counter">
      <span className="timeItem">
        {days}
        <span>DAYS</span>
      </span>
      <span className="timeItem">
        {hours}
        <span>HOURS</span>
      </span>
      <span className="timeItem">
        {minutes}
        <span>MINUTES</span>
      </span>
      <span className="timeItem">
        {seconds}
        <span>SECONDS</span>
      </span>
    </div>
  );
};

export default CountDown;
