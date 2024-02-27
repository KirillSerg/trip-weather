import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { activeTripAtom, upcomingTripAtom } from "../../Store";
import { getForecast } from "../../services/Services";
import { Weather } from "../../types/common";
import { getDayName } from "../../utilities/utility";
import "./Forecast.css";

const Forecast = () => {
  const activeTrip = useAtomValue(activeTripAtom);
  const upcomingTrip = useAtomValue(upcomingTripAtom);
  const [forecast, setForecast] = useState<Weather | null>(null);

  const trip = activeTrip || upcomingTrip;

  const carusel = useRef<HTMLDivElement>(null);

  const onScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (carusel.current) {
      carusel.current.scrollLeft += e.deltaY;
    }
  };

  const onClickBtn = (direction: number) => {
    if (carusel.current) {
      carusel.current.scrollLeft += direction * 80;
    }
  };

  useEffect(() => {
    if (trip) {
      (async () => {
        try {
          const location = `${trip.lat},${trip.lon}`;
          const period = `${trip.startDate}/${trip.endDate}`;
          const weather = await getForecast(location, period);
          setForecast(weather);
        } catch (err) {
          setForecast(null);
        }
      })();
    } else {
      setForecast(null);
    }
  }, [trip]);

  return (
    <div className="forecast">
      <h4 className="title">By days</h4>
      <div ref={carusel} className="list" id="list" onWheel={onScroll}>
        <button
          className={`control_btn_left ${
            forecast && forecast?.days.length > 15 && "active"
          }`}
          onClick={() => onClickBtn(-1)}
        >
          {"<"}
        </button>
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
        <button
          className={`control_btn_right ${
            forecast && forecast?.days.length > 15 && "active"
          }`}
          onClick={() => onClickBtn(1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Forecast;
