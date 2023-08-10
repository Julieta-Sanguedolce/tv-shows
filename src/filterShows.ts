import { Show } from "./Show";
import shows from "./shows.json";

export function filterShows(message: string): Show[] {
  const filteredShows = shows.filter((s) =>
    s.summary === null
      ? s.name.toUpperCase().includes(message.toUpperCase()) ||
        s.genres.join().toUpperCase().includes(message.toUpperCase())
      : s.name.toUpperCase().includes(message.toUpperCase()) ||
        s.summary.toUpperCase().includes(message.toUpperCase()) ||
        s.genres.join().toUpperCase().includes(message.toUpperCase())
  );

  return filteredShows;
}
