import { filterEpisodes } from "./filterEpisodes";

const episodes = [
  {
    id: 4998,
    url: "https://www.tvmaze.com/episodes/4998/the-simpsons-1x01-simpsons-roasting-on-an-open-fire",
    name: "Simpsons Roasting on an Open Fire",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "1989-12-17",
    airtime: "20:00",
    airstamp: "1989-12-18T01:00:00+00:00",
    runtime: 30,
    rating: {
      average: 7.7,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/69/173342.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/69/173342.jpg",
    },
    summary:
      "<p>Homer's Christmas bonus is canceled and the rainy-day funds are needed to pay for Bart's tattoo removal in the first full-length episode of the subversive animated satire about Springfield's hapless first family.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/4998",
      },
      show: {
        href: "https://api.tvmaze.com/shows/83",
      },
    },
  },
  {
    id: 4999,
    url: "https://www.tvmaze.com/episodes/4999/the-simpsons-1x02-bart-the-genius",
    name: "Bart the Genius",
    season: 1,
    number: 2,
    type: "regular",
    airdate: "1990-01-14",
    airtime: "20:00",
    airstamp: "1990-01-15T01:00:00+00:00",
    runtime: 30,
    rating: {
      average: 7.3,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/69/173343.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/69/173343.jpg",
    },
    summary:
      "<p>Bart is moved to a school for the gifted after he switches aptitude tests with another boy. <b>Blackboard:</b> 'I will not waste chalk'.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/4999",
      },
      show: {
        href: "https://api.tvmaze.com/shows/83",
      },
    },
  },
];

test("base test", () => {
  expect(filterEpisodes(episodes, "SimpSons RoAsting on")).toEqual([
    episodes[0],
  ]);
});
