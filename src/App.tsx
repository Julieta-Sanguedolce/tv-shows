import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import episodes from "./episodes.json";
import { filterEpisodes } from "./filterEpisodes";

function App(): JSX.Element {
  const [searchedTerm, setSearchedTerm] = useState("");
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
