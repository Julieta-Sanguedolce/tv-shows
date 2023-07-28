import { useState } from "react";
import { Footer } from "./Footer";
import EpisodeMainDisplayer from "./EpisodeMainDisplayer";
import { ShowMainDisplayer } from "./ShowMainDisplayer";

export function App(): JSX.Element {
  const [selectedShow, setSelectedShow] = useState<string>("");
  const [searchedShow, setSearchedShow] = useState<string>("");

  return (
    <>
      {selectedShow.length === 0 && (
        <ShowMainDisplayer
          searchedShow={searchedShow}
          setSearchedShow={setSearchedShow}
          setSelectedShow={setSelectedShow}
        />
      )}
      {selectedShow.length > 0 && (
        <EpisodeMainDisplayer
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
          resetSearchedShow={setSearchedShow}
        />
      )}
      <Footer />
    </>
  );
}
