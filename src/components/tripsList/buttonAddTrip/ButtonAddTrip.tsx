import { useAtom } from "jotai";
import "./ButtonAddTrip.css";
import { isCreatTripAtom } from "../../../Store";

const ButtonAddTrip = () => {
  const [, setIsCreateTrip] = useAtom(isCreatTripAtom);

  return (
    <div className="wrapper">
      <button
        className="visual"
        onClick={() => {
          setIsCreateTrip(true);
        }}
      >
        <h1>+</h1>
        <p>add trip</p>
      </button>
      <div className="info"></div>
    </div>
  );
};

export default ButtonAddTrip;
