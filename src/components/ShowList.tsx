import shows from "../shows.json";
import ShowView from "./ShowView";

export function ShowList(): JSX.Element {
  return (
    <>
      {shows.map((s) => (
        <ShowView show={s} key={s.id} />
      ))}
    </>
  );
}
