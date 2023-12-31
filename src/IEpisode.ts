export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  rating: { average: number | null };
  runtime: number;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  _links: { self: { href: string } };
}
