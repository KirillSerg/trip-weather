import { useAtom, useAtomValue } from "jotai";
import {
  activeTripAtom,
  deleteTripAtom,
  upcomingTripAtom,
} from "../../../Store";
import { DeleteIcon } from "../../../assets/icons";
import { Trip } from "../../../types/common";
import "./TripCard.css";

const TripCard = (props: Trip) => {
  const [activeTrip, setActiveTrip] = useAtom(activeTripAtom);
  const [, deleteTrip] = useAtom(deleteTripAtom);
  const upcomingTrip = useAtomValue(upcomingTripAtom);

  const isActiveTrip = activeTrip
    ? activeTrip.id === props.id
    : upcomingTrip?.id === props.id;

  return (
    <div
      className={`wrapper ${isActiveTrip && "active"}`}
      onClick={() => setActiveTrip(props)}
    >
      <div className="image">
        <button
          className="delete-icon-wrap"
          onClick={(e) => {
            deleteTrip(e, props.id);
          }}
        >
          <DeleteIcon className="delete-icon icon-path" />
        </button>
        <img src={props.img} alt="city" onClick={() => {}} />
      </div>

      <div className="info">
        <h5>{props.name}</h5>
        <p>
          {props.startDate.split("-").reverse().join(".") +
            " - " +
            props.endDate.split("-").reverse().join(".")}
        </p>
      </div>
    </div>
  );
};

export default TripCard;
