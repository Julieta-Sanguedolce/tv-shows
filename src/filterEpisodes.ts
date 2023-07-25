import { IEpisode } from "./IEpisode";

export function filterEpisodes(
  episodes: IEpisode[],
  message: string
): IEpisode[] {
  console.log(message);

  const filteredEpisodes = episodes.filter(
    (e) =>
      e.name.toUpperCase().includes(message.toUpperCase()) ||
      e.summary.toUpperCase().includes(message.toUpperCase())
  );

  return filteredEpisodes;
}
