import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
// import episodes from "./episodes.json";
import { filterEpisodes } from "./filterEpisodes";
import { IEpisode } from "./IEpisode";

function App(): JSX.Element {
  const [searchedTerm, setSearchedTerm] = useState<string>("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    async function loadEpisodes() {
      const episodesFetch = await fetch(
        "https://api.tvmaze.com/shows/5/episodes"
      );
      const jsonContent: IEpisode[] = await episodesFetch.json();
      setEpisodes(jsonContent);
      console.log("Hello");
    }
    loadEpisodes();
  }, []);

  const filteredEpisodes = filterEpisodes(episodes, searchedTerm);
  return (
    <>
      <SearchBar
        message={searchedTerm}
        changeMessage={setSearchedTerm}
        count={filteredEpisodes.length}
      />
      <EpisodeList searchedList={filteredEpisodes} />;
      <Footer />
    </>
  );
}

export default App;
