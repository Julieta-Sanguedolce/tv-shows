import { IEpisode } from "./IEpisode";
import { episodeCode } from "./episodeCode"

export default function EpisodeView({episode}:EpisodeViewProps):JSX.Element {
    return (
        <>
        <div>{episode.name}</div>
        <div>{episodeCode(episode.season,episode.number)}</div>
        </>
    )
}

interface EpisodeViewProps {
    episode: IEpisode
}