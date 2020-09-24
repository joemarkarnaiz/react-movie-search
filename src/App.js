import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const IMG_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(IMG_API);
    return () => {
      //      cleanup;
    };
  }, []);

  const getMovies = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(IMG_API_SEARCH + search);
    getMovies(IMG_API_SEARCH + search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <header>
          <input
            value={search}
            type="search"
            className="app__input"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>
      </form>
      <div className="app__container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie}></Movie>
        ))}
      </div>
    </div>
  );
}

export default App;
