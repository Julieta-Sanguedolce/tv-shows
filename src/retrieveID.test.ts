import { retrieveID } from "./retrieveID";

test("Base test", () => {
  expect(retrieveID("Downton Abbey")).toBe(251);
});
