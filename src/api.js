export const getMoviesApi = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2JiZTdiMzdmMWYzNzk1OTUxYWQ2YWI5NzQ1ZGNlZCIsInN1YiI6IjY1MWQ1ZjlkZWE4NGM3MDE0ZWZlMDZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Io2ahhvJsgVGDJIBVuBUl8tx--ysMrhn8Og_Pa1wG74",
    },
  };

  return fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  ).then((http) => http.json());
};
