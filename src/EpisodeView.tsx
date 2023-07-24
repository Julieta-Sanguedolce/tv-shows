import { IEpisode } from "./IEpisode";


export default function EpisodeView({episode}:EpisodeViewProps):JSX.Element {
    return (
        <>
        <div>{episode.name}</div>
        </>
    )
}

interface EpisodeViewProps {
    episode: IEpisode
}