import "../main.css";
import { ShowSearch } from "./ShowSearch";
import { ShowList } from "./ShowList";
import { filterShows } from "../filterShows";

export type ShowMainDisplayerProps = {
  searchedShow: string;
  setSearchedShow: (st: string) => void;
  setSelectedShow: (st: string) => void;
};

export function ShowMainDisplayer({
  searchedShow,
  setSearchedShow,
  setSelectedShow,
}: ShowMainDisplayerProps): JSX.Element {
  const filteredShows = filterShows(searchedShow);

  return (
    <div>
      <ShowSearch
        message={searchedShow}
        changeMessage={setSearchedShow}
        count={filteredShows.length}
      />
      <div className="flex-container">
        <ShowList
          filteredShows={filteredShows}
          setSelectedShow={setSelectedShow}
        />
      </div>
    </div>
  );
}
