import { useAtom } from "jotai";
import { searchedTripAtom } from "../../Store";
import "./Search.css";

const Search = () => {
  const [searchedTrip, setSearchedTrip] = useAtom(searchedTripAtom);

  return (
    <input
      className="search"
      placeholder="Search your trip"
      value={searchedTrip}
      onChange={(e) => setSearchedTrip(e.target.value)}
    />
  );
};

export default Search;
