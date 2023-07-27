import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { EpisodeSearch } from "./components/EpisodeSearch";
import { useState, useEffect } from "react";
import { filterEpisodes } from "./filterEpisodes";
import { IEpisode } from "./IEpisode";
import { retrieveID } from "./retrieveID";

interface AppProp {
  selectedShow: string;
  setSelectedShow: (st: string) => void;
  resetSearchedText: (st: string) => void;
}
function App({
  selectedShow,
  setSelectedShow,
  resetSearchedText,
}: AppProp): JSX.Element {
  const [searchedTerm, setSearchedTerm] = useState<string>("");
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  const showToFetch: string =
    "https://api.tvmaze.com/shows/" + retrieveID(selectedShow) + "/episodes";

  useEffect(() => {
    async function loadEpisodes() {
      const episodesFetch = await fetch(showToFetch);
      const jsonContent: IEpisode[] = await episodesFetch.json();
      setEpisodes(jsonContent);
    }
    loadEpisodes();
  }, [showToFetch]);

  const filteredEpisodes = filterEpisodes(episodes, searchedTerm);
  const handleGoHome = () => {
    setSelectedShow("");
    setSearchedTerm("");
  };
  return (
    <>
      <button onClick={handleGoHome}>Go home</button>
      <EpisodeSearch
        message={searchedTerm}
        changeMessage={setSearchedTerm}
        count={`${filteredEpisodes.length}/${episodes.length}`}
      />
      <EpisodeList searchedList={filteredEpisodes} />;
      <Footer />
    </>
  );
}

export default App;
