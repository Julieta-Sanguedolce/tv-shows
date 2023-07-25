import { tagsRemover } from "./tagsRemover";

test("remove simple tags", () => {
  expect(tagsRemover("Heloo <p> how <ya>")).toBe("Heloo  how ");
});

test("remove complex tag", () => {
  expect(tagsRemover("<button>Press me<h1></h1>")).toBe("Press me");
});
