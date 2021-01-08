import "./SelectMovie.scss";
import React from "react";

function SelectMovie(props) {
  console.log(props);
  return (
    <div className="movie-select">
      <div className="top-sec">
        <div>
          {props.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}
              alt={props.title}
              height="300px"
            ></img>
          ) : (
            <div></div>
          )}
        </div>
        <div className="movie-content">
          {props.title ? <h2 className="movie-name">{props.title}</h2> : ""}

          {props.release_date ? (
            <p className="movie-release">
              Release-Date : <span>{props.release_date}</span>
            </p>
          ) : (
            ""
          )}
          {props.vote_average ? (
            <p className="movie-rating">
              Rating : <span>{props.vote_average}</span>
            </p>
          ) : (
            ""
          )}
          {props.vote_count ? (
            <p className="vote-count">
              Vote Count : <span>{props.vote_count}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      {props.overview ? (
        <div className="bottom-sec">
          <h2>Movie Description : </h2>
          <p>{props.overview}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SelectMovie;

// selected movies will be shown in this component
