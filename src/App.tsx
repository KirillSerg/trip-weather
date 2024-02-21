import "./App.css";
import Forecast from "./components/forecast/Forecast";
import Modal from "./components/modal/Modal";
import Search from "./components/search/Search";
import TodayForecast from "./components/todayForecast/TodayForecast";
import TripsList from "./components/tripsList/TripsList";

const App = () => {
  return (
    <main className="conteiner">
      <section className="trips">
        <header>Trip-weather</header>
        <Search />
        <TripsList />
        <Forecast />
      </section>
      <TodayForecast />
      <Modal />
    </main>
  );
};

export default App;
