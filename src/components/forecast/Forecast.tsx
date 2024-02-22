import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getForecast } from "../../services/Services";
import { Weather } from "../../types/common";
import { getDayName } from "../../utilities/utility";
import { selectedTripAtom, tripsAtom } from "../../Store";
import "./Forecast.css";

const Forecast = () => {
  const [selectedTrip] = useAtom(selectedTripAtom);
  const [trips] = useAtom(tripsAtom);
  const [forecast, setForecast] = useState<Weather | null>(null);

  const trip = selectedTrip || trips[0];

  useEffect(() => {
    const location = `${trip.lat},${trip.lon}`;
    const period = `${trip.startDate}/${trip.endDate}`;

    (async () => {
      const weather = await getForecast(location, period);
      setForecast(weather);
    })();
  }, [trip]);

  return (
    <div className="forecast">
      <h4 className="title">By days</h4>
      <div className="list">
        {forecast &&
          forecast.days.map((day) => {
            return (
              <div key={day.datetime} className="day">
                <p>{getDayName(day.datetime)}</p>
                <img src={`./weatherIcons/${day.icon}.svg`} alt="weather" />
                <p>{`${Math.floor(day.tempmin)}°/${Math.floor(
                  day.tempmax
                )}°`}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Forecast;
