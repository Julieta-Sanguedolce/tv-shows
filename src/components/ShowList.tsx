import shows from "../shows.json"
import ShowView from "../components/ShowView";
import { Show } from "../Show";

export function ShowList():JSX.Element{

    const firstShow:Show = {shows[0]};

    return(
        <>
            <ShowView show={firstShow} />
        </>
    )
}