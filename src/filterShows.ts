import { Show } from "./Show";

export function filterShows(shows: Show[], message: string): Show[] {
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
