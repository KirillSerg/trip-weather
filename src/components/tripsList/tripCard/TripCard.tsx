import { useAtom } from "jotai";
import { DeleteIcon } from "../../../assets/icons";
import { Trip } from "../../../types/common";
import "./TripCard.css";
import { deleteTripAtom, selectedTripAtom } from "../../../Store";

const TripCard = (props: Trip) => {
  const [selectedTrip, setSelectedTrip] = useAtom(selectedTripAtom);
  const [, deleteTrip] = useAtom(deleteTripAtom);

  return (
    <div
      className={`wrapper ${selectedTrip?.id === props.id ? "active" : ""}`}
      onClick={() => setSelectedTrip(props)}
    >
      <div className="image">
        <button
          onClick={() => {
            deleteTrip(props.id);
          }}
          className="delete-icon-wrap"
        >
          <DeleteIcon className="delete-icon icon-path" />
        </button>
        <img src={props.img} alt="city" />
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
