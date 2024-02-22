import { useAtomValue } from "jotai";
import "./TripsList.css";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { tripsAtom } from "../../Store";
import TripCard from "./tripCard/TripCard";

const TripsList = () => {
  const tripsList = useAtomValue(tripsAtom);
  return (
    <div className="trips-list">
      {tripsList.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
      <ButtonAddTrip />
    </div>
  );
};

export default TripsList;
