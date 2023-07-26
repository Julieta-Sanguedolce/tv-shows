//import episodes from "../episodes.json";
import { IEpisode } from "../IEpisode";
import shows from "../shows.json";

export interface SearchBarType {
  message: string;
  changeMessage: (st: string) => void;
  count: number;
  episodes: IEpisode[];
  handleShowSelection: (st: string) => void;
  searchedShow: string;
}

export function SearchBar({
  message,
  changeMessage,
  count,
  episodes,
  handleShowSelection,
  searchedShow,
}: SearchBarType): JSX.Element {
  return (
    <>
      <select
        value={searchedShow}
        onChange={(element) => {
          handleShowSelection(element.target.value);
        }}
      >
        {shows.map((s) => (
          <option value={s.name} key={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      <input
        value={message}
        onChange={(e) => {
          changeMessage(e.target.value);
        }}
        placeholder="Search for episode.."
      />
      <>
        Displaying {count}/{episodes.length} episodes
      </>
    </>
  );
}
