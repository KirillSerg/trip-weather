import { useAtom } from "jotai";
import { DeleteIcon } from "../../../assets/icons";
import { Trip } from "../../../types/common";
import "./TripCard.css";
import { deleteTripAtom } from "../../../Store";

const TripCard = (props: Trip) => {
  const [, deleteTrip] = useAtom(deleteTripAtom);

  return (
    <div className="wrapper">
      <div
        className="image"
        // onClick={() => {
        //   setIsCreateTrip(true);
        // }}
      >
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
