import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2JiZTdiMzdmMWYzNzk1OTUxYWQ2YWI5NzQ1ZGNlZCIsInN1YiI6IjY1MWQ1ZjlkZWE4NGM3MDE0ZWZlMDZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Io2ahhvJsgVGDJIBVuBUl8tx--ysMrhn8Og_Pa1wG74",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((http) => http.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading === true) return null;
  return (
    <div className="flex flex-col bg-slate-900 mb-10">
      <nav className="h-12 bg-slate-800 mb-10">
        <ul className="h-full flex items-center justify-end px-10 ">
          <li className="text-red-500">
            <Link to={`/wishlist`}>Wishlist</Link>
          </li>
        </ul>
      </nav>
      <div className="px-6 ">
        <h1 className="font-bold mb-10 text-3xl text-red-500">Trending</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {movies.map((movie) => (
            <Card {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
