export interface SearchBarType {
  message: string;
  changeMessage: (st: string) => void;
}

export function SearchBar({
  message,
  changeMessage,
}: SearchBarType): JSX.Element {
  return (
    <input
      value={message}
      onChange={(e) => {
        changeMessage(e.target.value);
      }}
      placeholder="Search for episode.."
    />
  );
}
