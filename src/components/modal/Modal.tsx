import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { addTripAtom, isCreatTripAtom } from "../../Store";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCities } from "../../services/Services";
import { City } from "../../types/common";
import { mockImgCities } from "../../assets/mockCityImg";
import "./Modal.css";

const Modal = () => {
  const [isCreatTrip, setIsCreateTrip] = useAtom(isCreatTripAtom);
  const [, addTrip] = useAtom(addTripAtom);

  const [city, setCity] = useState<City | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

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

  useEffect(() => {
    setIsValidForm(
      Date.parse(startDate) <= Date.parse(endDate) && !!city?.label
    );
  }, [startDate, endDate, city]);

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
              <span>*</span>
              City
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
            disabled={!isValidForm}
            className={`add_btn ${isValidForm ? "valid" : ""}`}
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
