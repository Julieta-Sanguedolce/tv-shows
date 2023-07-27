export interface Show {
  id: number | null;
  url: string | null;
  name: string | null;
  type: string | null;
  language: string | null;
  genres: string[] | null;
  status: string | null;
  runtime: number | null | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null | null;
  officialSite: string | null | null;
  schedule: {
    time: string | null;
    days: string[] | null;
  };
  rating: {
    average: number | null | null;
  };
  weight: number | null;
  network: {
    id: number | null;
    name: string | null;
    country: {
      name: string | null;
      code: string | null;
      timezone: string | null;
    };
    officialSite: string | null | null;
  } | null;
  webChannel: {
    id: number | null;
    name: string | null;
    country: {
      name: string | null;
      code: string | null;
      timezone: string | null;
    } | null;
    officialSite: string | null;
  } | null;
  dvdCountry: string | null | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null | null;
  };
  image: {
    medium: string | undefined;
    original: string | undefined;
  };
  summary: string | null;
  updated: number | null;
  _links: {
    self: {
      href: string | null;
    };
    previousepisode?:
      | {
          href: string | null;
        }
      | null
      | undefined;
  } | null;
}
