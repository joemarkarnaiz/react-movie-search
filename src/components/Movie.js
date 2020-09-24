import React from "react";

const IMG = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ title, poster_path, overview, vote_average }) => {
  const setVoteAverageClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie__header">
      <img
        src={
          poster_path
            ? IMG + poster_path
            : "https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
        alt={title}
      ></img>
      <div className="movie__info">
        <h3>{title}</h3>
        <span className={`movie__tag ${setVoteAverageClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie__over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
