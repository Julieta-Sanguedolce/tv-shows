import shows from "../shows.json";
import ShowView from "./ShowView";
import { useState } from "react";
import App from "../App";
import { ShowSearch } from "./ShowSearch";
import { filterShows } from "../filterShows";
import { Footer } from "./Footer";

export function ShowList(): JSX.Element {
  const [selectedShow, setSelectedShow] = useState<string>("");
  const [searchedShow, setSearchedShow] = useState<string>("");

  const filteredShows = filterShows(shows, searchedShow);
  return (
    <>
      {selectedShow.length === 0 && (
        <div>
          <ShowSearch
            message={searchedShow}
            changeMessage={setSearchedShow}
            count={filteredShows.length}
          />
          <div className="flex-container">
            {filteredShows.map((s) => (
              <ShowView show={s} key={s.id} setSelectedShow={setSelectedShow} />
            ))}
          </div>
        </div>
      )}
      {selectedShow.length > 0 && (
        <App
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
          resetSearchedShow={setSearchedShow}
        />
      )}
      <Footer />
    </>
  );
}
