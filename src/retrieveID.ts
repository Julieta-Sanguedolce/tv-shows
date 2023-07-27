import shows from "./shows.json";

export function retrieveID(showName: string): number | undefined {
  for (const show of shows) {
    if (showName === show.name) {
      return show.id;
    }
  }
}
