import { useState } from "react";
import { useAtom } from "jotai";
import { AsyncPaginate } from "react-select-async-paginate";
import { addTripAtom, isCreatTripAtom } from "../../Store";
import { getCities } from "../../services/Services";
import { City } from "../../types/common";
import "./Modal.css";
import { mockImgCities } from "../../assets/mockCityImg";

const Modal = () => {
  const [isCreatTrip, setIsCreateTrip] = useAtom(isCreatTripAtom);

  const [city, setCity] = useState<City | null>(null);
  const [, addTrip] = useAtom(addTripAtom);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleOnSelect = (searchData: City | null) => {
    setCity(searchData);
  };

  const handleAddTrip = () => {
    if (city) {
      const [lat, lon] = city.value.split(" ");
      addTrip({
        id: crypto.randomUUID(),
        name: city.label,
        lat: lat,
        lon: lon,
        startDate,
        endDate,
        img: mockImgCities[Math.floor(Math.random() * mockImgCities.length)],
      });
      setCity(null);
      setStartDate("");
      setEndDate("");
    }
  };

  const handleCancel = () => {
    setIsCreateTrip(false);
    setCity(null);
    setStartDate("");
    setEndDate("");
  };

  return (
    <div
      className={isCreatTrip ? "modal__bg activ" : "modal__bg"}
      onClick={handleCancel}
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
            onClick={handleCancel}
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
              value={city}
              onChange={handleOnSelect}
              loadOptions={getCities}
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
          <button className="close_btn" type="submit" onClick={handleCancel}>
            Cancel
          </button>
          <button
            disabled={!startDate || !endDate || city === null}
            className="add_btn"
            type="submit"
            onClick={handleAddTrip}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
