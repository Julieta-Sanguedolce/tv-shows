export interface SearchBarType {
  message: string;
  changeMessage: (st: string) => void;
  count: string;
  handleShowSelection: (st: string) => void;
  searchedShow: string;
}

export function SearchBar({
  message,
  changeMessage,
  count,
  handleShowSelection,
  searchedShow,
}: SearchBarType): JSX.Element {
  return (
    <>
      {/* <select
        value={searchedShow}
        onChange={(element) => {
          handleShowSelection(element.target.value);
        }}
      >
        {shows
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((s) => (
            <option value={s.name} key={s.id}>
              {s.name}
            </option>
          ))}
      </select> */}
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
