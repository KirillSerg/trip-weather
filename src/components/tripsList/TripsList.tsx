import { useAtomValue } from "jotai";
import ButtonAddTrip from "./buttonAddTrip/ButtonAddTrip";
import { filteredTripsAtom } from "../../Store";
import TripCard from "./tripCard/TripCard";
import "./TripsList.css";
import { useRef } from "react";

const TripsList = () => {
  const filteredTrips = useAtomValue(filteredTripsAtom);

  const carusel = useRef<HTMLDivElement>(null);

  const onScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (carusel.current) {
      carusel.current.scrollLeft += e.deltaY;
    }
  };

  const onClickBtn = (direction: number) => {
    if (carusel.current) {
      carusel.current.scrollLeft += direction * 180;
    }
  };

  return (
    <div className="trips">
      <div
        ref={carusel}
        className="trips-list"
        id="trips-list"
        onWheel={onScroll}
      >
        <button
          className={`control_btn_left ${filteredTrips.length > 3 && "active"}`}
          onClick={() => onClickBtn(-1)}
        >
          {"<"}
        </button>
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
        <ButtonAddTrip />
        <button
          className={`control_btn_right ${
            filteredTrips.length > 3 && "active"
          }`}
          onClick={() => onClickBtn(1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TripsList;
