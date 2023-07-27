import "../main.css";
import { Show } from "../Show"
import { tagsRemover } from "../tagsRemover";

interface ShowViewProps {
  show: Show;
}

export default function ShowView({
  show,
}: ShowViewProps): JSX.Element {
  const handleShowClick = () => {
    window.open(, "_blank");
  };

  return (
    <div className="flex-card">
      <div className= "episode-title">
        {show.name}
      </div>
      {show.image && (
        <img
          src={show.image.medium}
          alt=""
        ></img>
      )}
      {show.summary && <p>{tagsRemover(show.summary)}</p>}
      <div>
      {show.genres && (<p>{show.genres}</p>)}
      {show.status && (<p>{show.status}</p>)}
      {show.rating.average && (<p>{show.rating.average}</p>)}
      {show.runtime && (<p>{show.runtime}</p>)}
      </div>
    </div>
  );
}