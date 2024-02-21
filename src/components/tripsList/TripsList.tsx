import { useAtomValue } from "jotai";
import "./TripsList.css";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { tripsAtom } from "../../Store";

const TripsList = () => {
  const tripsList = useAtomValue(tripsAtom);
  return (
    <div className="trips-list">
      {tripsList.map((trip, i) => (
        <div key={i}>{trip.startDate}</div>
      ))}
      <ButtonAddTrip />
    </div>
  );
};

export default TripsList;
