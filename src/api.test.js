import { getMoviesApi } from "./api";

describe("api call", () => {
  test("should pass", async () => {
    return await getMoviesApi().then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });
  });
});
