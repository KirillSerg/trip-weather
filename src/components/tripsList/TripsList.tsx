import { useAtomValue } from "jotai";
import "./TripsList.css";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { onFilterTripsAtom } from "../../Store";
import TripCard from "./tripCard/TripCard";

const TripsList = () => {
  const filteredTripsList = useAtomValue(onFilterTripsAtom);

  return (
    <div className="trips-list">
      {filteredTripsList.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
      <ButtonAddTrip />
    </div>
  );
};

export default TripsList;
