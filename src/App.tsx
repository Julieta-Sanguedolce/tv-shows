import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";
// import episodes from "./episodes.json";
import { filterEpisodes } from "./filterEpisodes";
import { IEpisode } from "./IEpisode";
import { retrieveID } from "./retrieveID";
import shows from "./shows.json";
import { ShowList } from "./components/ShowList";

interface AppProp {
  selectedShow:string,
}
function App({selectedShow}:AppProp): JSX.Element {
  
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
  return (
    <>
      <SearchBar
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
