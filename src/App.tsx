import { EpisodeList } from "./components/EpisodeList";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";

function App(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <>
      <SearchBar message={typedMessage} changeMessage={setTypedMessage} />
      <EpisodeList />;
      <Footer />
    </>
  );
}

export default App;
