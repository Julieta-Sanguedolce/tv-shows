export interface SearchBarType {
  message: string;
  changeMessage: (st: string) => void;
  count: string;
}

export function SearchBar({
  message,
  changeMessage,
  count,
}: SearchBarType): JSX.Element {
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
