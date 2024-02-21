import { useAtomValue } from "jotai";
import "./TripsList.css";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { tripsAtom } from "../../Store";
import TripCard from "./tripCard/TripCard";

const TripsList = () => {
  const tripsList = useAtomValue(tripsAtom);
  return (
    <div className="trips-list">
      {tripsList.map((trip, i) => (
        <TripCard key={i} {...trip} />
      ))}
      <ButtonAddTrip />
    </div>
  );
};

export default TripsList;
