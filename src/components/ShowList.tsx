import shows from "../shows.json";
import ShowView from "./ShowView";
import { useState } from "react";
import App from "../App";

export function ShowList(): JSX.Element {


  const [selectedShow, setSelectedShow] = useState<string>("");
  console.log(selectedShow);
  return (
    <>
    {(selectedShow.length === 0) && 
      (shows.map((s) => (
        <ShowView 
          show={s} 
          key={s.id} 
          setSelectedShow={setSelectedShow}/>
      )))
      }
      {(selectedShow.length > 0) &&
      <App selectedShow={selectedShow} />
    }
    </>
  );
}
