import { useState } from "react";
import { useAtom } from "jotai";
import { AsyncPaginate } from "react-select-async-paginate";
import { addTripAtom, isCreatTripAtom } from "../../Store";
import { getCityOptions } from "../../services/Services";
import { Location } from "../../types/common";
import "./Modal.css";

const Modal = () => {
  const [isCreatTrip, setIsCreateTrip] = useAtom(isCreatTripAtom);

  const [location, setLocation] = useState<Location | null>(null);
  const [, addTrip] = useAtom(addTripAtom);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleOnChange = (searchData: Location | null) => {
    setLocation(searchData);
  };

  const handleAddTrip = () => {
    if (location) {
      const [lat, lon] = location.value.split(" ");
      addTrip({
        lat: lat,
        lon: lon,
        startDate,
        endDate,
      });
      setLocation(null);
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <div
      className={isCreatTrip ? "modal__bg activ" : "modal__bg"}
      onClick={() => setIsCreateTrip(false)}
    >
      <div
        className={isCreatTrip ? "modal__conteiner activ" : "modal__conteiner"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">
          <h4 className="header__title">Create trip</h4>
          <button
            className="header__close_btn"
            type="submit"
            onClick={() => setIsCreateTrip(false)}
          >
            X
          </button>
        </div>
        <div className="header__line"></div>

        <div className="inputs-group">
          <div className="inputs-group__group">
            <label htmlFor="location">
              <span>*</span>City
            </label>
            <AsyncPaginate
              aria-label="location"
              className="select"
              placeholder="Search for city"
              debounceTimeout={600}
              value={location}
              onChange={handleOnChange}
              loadOptions={getCityOptions}
            />
          </div>

          <div className="inputs-group__group">
            <label htmlFor="startdate">
              <span>*</span>Start date
            </label>
            <input
              required
              name="startdate"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="enter your ToDo"
              value={startDate}
            />
          </div>

          <div className="inputs-group__group">
            <label htmlFor="enddate">
              <span>*</span>Start date
            </label>
            <input
              required
              name="enddate"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>

        <div className="footer">
          <button
            className="close_btn"
            type="submit"
            onClick={() => setIsCreateTrip(false)}
          >
            Cancel
          </button>
          <button className="add_btn" type="submit" onClick={handleAddTrip}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
