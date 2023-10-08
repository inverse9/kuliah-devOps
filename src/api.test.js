import { getMoviesApi } from "./api";

describe("api call", () => {
  test("should pass", () => {
    return getMoviesApi().then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });
  });
});
