import EpisodeView from "./EpisodeView"
import episodes from "../episodes.json"
import "../main.css";



export function EpisodeList():JSX.Element {

    return (
        <div className="flex-container">
            {episodes.map((e)=><EpisodeView episode={e} key={e.id} />)}
        </div>
    )
}