import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { getForecast } from "../../services/Services";
import { Weather } from "../../types/common";
import { getDayName } from "../../utilities/utility";
import { onSelectTripAtom } from "../../Store";
import "./Forecast.css";

const Forecast = () => {
  const selectedTrip = useAtomValue(onSelectTripAtom);
  const [forecast, setForecast] = useState<Weather | null>(null);

  useEffect(() => {
    if (selectedTrip) {
      (async () => {
        const location = `${selectedTrip.lat},${selectedTrip.lon}`;
        const period = `${selectedTrip.startDate}/${selectedTrip.endDate}`;
        const weather = await getForecast(location, period);
        setForecast(weather);
      })();
    } else {
      setForecast(null);
    }
  }, [selectedTrip]);

  return (
    <div className="forecast">
      <h4 className="title">By days</h4>
      <div className="list">
        {forecast ? (
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
          })
        ) : (
          <p>select or create your trip</p>
        )}
      </div>
    </div>
  );
};

export default Forecast;
