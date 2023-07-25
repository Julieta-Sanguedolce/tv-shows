import { filterEpisodes } from "./filterEpisodes";
import episodes from "./episodes.json";

test("base test", () => {
  expect(filterEpisodes(episodes, "winteR is Coming")).toEqual([episodes[0]]);
});
