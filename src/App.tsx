import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
// import episodes from "./episodes.json";
import { filterEpisodes } from "./filterEpisodes";
import { IEpisode } from "./IEpisode";
import { retrieveID } from "./retrieveID";
import shows from "./shows.json";

function App(): JSX.Element {
  const [searchedTerm, setSearchedTerm] = useState<string>("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const [selectedShow, setSelectedShow] = useState<string>(
    shows.sort((a, b) => a.name.localeCompare(b.name))[0].name
  );

  const showToFetch: string =
    "https://api.tvmaze.com/shows/" + retrieveID(selectedShow) + "/episodes";

  useEffect(() => {
    async function loadEpisodes() {
      const episodesFetch = await fetch(showToFetch);
      const jsonContent: IEpisode[] = await episodesFetch.json();
      setEpisodes(jsonContent);
      console.log("Hello");
    }
    loadEpisodes();
  }, [showToFetch]);

  const filteredEpisodes = filterEpisodes(episodes, searchedTerm);
  return (
    <>
      <SearchBar
        message={searchedTerm}
        changeMessage={setSearchedTerm}
        count={`${filteredEpisodes.length}/${episodes.length}`}
        handleShowSelection={setSelectedShow}
        searchedShow={selectedShow}
      />
      <EpisodeList searchedList={filteredEpisodes} />;
      <Footer />
    </>
  );
}

export default App;
