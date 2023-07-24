import React from "react";
import App from "./App";
import { episodeCode } from "./episodeCode";

test("less than 10", () => {
  expect(episodeCode(3,9)).toBe('S03E09');
});

test("greater than 10", () => {
    expect(episodeCode(11,19)).toBe('S11E19');
});