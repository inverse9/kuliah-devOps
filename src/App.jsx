import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";
import { getMoviesApi } from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  const getMovies = async () => {
    await getMoviesApi()
      .then((res) => setMovies(res.results))
      .catch((err) => setIsErr(true))
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
      <section className="px-6">
        <h1 className="font-bold mb-10 text-3xl text-red-500">Trending test</h1>
        {isErr ? (
          <>Error fetching data</>
        ) : (
          <div className="flex flex-wrap gap-10 justify-center">
            {movies.map((movie, index) => (
              <Fragment key={movie.id}>
                <Card {...movie} index={index} />
              </Fragment>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
