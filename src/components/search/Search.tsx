import "./Search.css";
import { useAtom } from "jotai";
import { onSearchTripAtom } from "../../Store";

const Search = () => {
  const [search, setSearch] = useAtom(onSearchTripAtom);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <input
      className="search"
      placeholder="Search your trip"
      value={search}
      onChange={(e) => onSearch(e)}
    />
  );
};

export default Search;
