import ShowView from "./ShowView";
import "../main.css";
import { Show } from "../Show";

interface SearchedListProps {
  filteredShows: Show[];
  setSelectedShow: (st: string) => void;
}

export function ShowList({
  filteredShows,
  setSelectedShow,
}: SearchedListProps): JSX.Element {
  return (
    <div className="flex-container">
      {filteredShows
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((s) => (
          <ShowView show={s} key={s.id} setSelectedShow={setSelectedShow} />
        ))}
    </div>
  );
}
