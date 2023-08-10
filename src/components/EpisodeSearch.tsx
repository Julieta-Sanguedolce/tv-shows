export interface SearchType {
  message: string;
  changeMessage: (st: string) => void;
  count: string | number;
}

export function EpisodeSearch({
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
        placeholder="Search for episode.."
      />
      <>Displaying {count} episodes</>
    </>
  );
}
