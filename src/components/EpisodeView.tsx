import { IEpisode } from "../IEpisode";
import { episodeCode } from "../episodeCode";
import "../main.css";
import { tagsRemover } from "../tagsRemover";

interface EpisodeViewProps {
  episode: IEpisode;
}

export default function EpisodeView({
  episode,
}: EpisodeViewProps): JSX.Element {
  const handleImageClick = () => {
    window.open(episode.url, "_blank");
  };

  return (
    <div className="flex-card">
      <div className="episode-title">
        {episode.name} - {episodeCode(episode.season, episode.number)}
      </div>
      {episode.image && (
        <img
          src={episode.image.medium}
          alt=""
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        ></img>
      )}
      {episode.summary && <p>{tagsRemover(episode.summary)}</p>}
    </div>
  );
}
