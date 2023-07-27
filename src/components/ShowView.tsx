import "../main.css";
import { Show } from "../Show";
import { tagsRemover } from "../tagsRemover";

interface ShowViewProps {
  show: Show;
  setSelectedShow: (st:string) => void;
}

export default function ShowView({ show, setSelectedShow }: ShowViewProps): JSX.Element {
  
  const handleOpenEpisodes = () => {setSelectedShow(show.name)}

  return (

    <div className="flex-card">
      <button className="episode-title" onClick={handleOpenEpisodes}>{show.name}</button>
      {show.image && <img src={show.image.medium} alt=""></img>}
      {show.summary && <p>{tagsRemover(show.summary)}</p>}
      <div>
        {show.genres && <p>{show.genres}</p>}
        {show.status && <p>{show.status}</p>}
        {show.rating.average && <p>{show.rating.average}</p>}
        {show.runtime && <p>{show.runtime}</p>}
      </div>
    </div>
  );
}
