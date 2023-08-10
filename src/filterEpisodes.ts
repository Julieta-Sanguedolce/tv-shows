import { IEpisode } from "./IEpisode";

export function filterEpisodes(
  episodes: IEpisode[],
  message: string
): IEpisode[] {
  const filteredEpisodes = episodes.filter((e) =>
    e.summary === null
      ? e.name.toUpperCase().includes(message.toUpperCase())
      : e.name.toUpperCase().includes(message.toUpperCase()) ||
        e.summary.toUpperCase().includes(message.toUpperCase())
  );

  return filteredEpisodes;
}
