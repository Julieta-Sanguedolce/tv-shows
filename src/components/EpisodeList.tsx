import EpisodeView from "./EpisodeView";
import "../main.css";
import { IEpisode } from "../IEpisode";

interface SearchedListProps {
  searchedList: IEpisode[];
}

export function EpisodeList({ searchedList }: SearchedListProps): JSX.Element {
  return (
    <div className="flex-container">
      {searchedList.map((e) => (
        <EpisodeView episode={e} key={e.id} />
      ))}
    </div>
  );
}
