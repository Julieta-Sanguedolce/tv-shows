import EpisodeView from "./EpisodeView";
import episodes from "../episodes.json";
import "../main.css";
import { IEpisode } from "../IEpisode";
import { filterEpisodes } from "../filterEpisodes";

interface SearchMessageProps {
  message: string;
}

export function EpisodeList({ message }: SearchMessageProps): JSX.Element {
  let filteredEpisodes: IEpisode[] = [];

  if (message.length === 0) {
    filteredEpisodes = episodes;
  } else {
    filteredEpisodes = filterEpisodes(episodes, message);
  }

  return (
    <div className="flex-container">
      {filteredEpisodes.map((e) => (
        <EpisodeView episode={e} key={e.id} />
      ))}
    </div>
  );
}
