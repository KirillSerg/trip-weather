import { useAtomValue } from "jotai";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { filteredTripsAtom } from "../../Store";
import TripCard from "./tripCard/TripCard";
import "./TripsList.css";

const TripsList = () => {
  const filteredTrips = useAtomValue(filteredTripsAtom);

  return (
    <div className="trips-list">
      {filteredTrips.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
      <ButtonAddTrip />
    </div>
  );
};

export default TripsList;
