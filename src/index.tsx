import React from "react";
import ReactDOM from "react-dom/client";
import { ShowList } from "./components/ShowList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShowList />
  </React.StrictMode>
);
