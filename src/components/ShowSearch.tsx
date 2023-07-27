import { SearchType } from "./EpisodeSearch";

export function ShowSearch({
  message,
  changeMessage,
  count,
}: SearchType): JSX.Element {
  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          changeMessage(e.target.value);
        }}
        placeholder="Search for show.."
      />
      <>Displaying {count} shows</>
    </>
  );
}
