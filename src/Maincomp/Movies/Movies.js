import "./Movies.scss";
import React, { useState } from "react";
import SelectMovie from "./SelectMovie/SelectMovie";

// this component is to show the searched movies on sidebar

function Movies(props) {
  const movielist = props;
  const [select, setSelect] = useState([]);

  // function to set the selected movie
  const ShowCon = (v) => {
    setSelect(v);
  };

  return (
    <div className="movies-main">
      <div className="searched-movies">
        <ul>
          {Object.keys(movielist).map((fets) => (
            <li
              key={movielist[fets].id}
              className="movie"
              onClick={ShowCon.bind(this, movielist[fets])}
            >
              <div className="movie-image">
                {movielist[fets].poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movielist[fets].poster_path}`}
                    alt={movielist[fets].title}
                    height="150px"
                  />
                ) : (
                  <div>No Image</div>
                )}
              </div>
              <div className="movie-content">
                <h2 className="movie-name">{movielist[fets].title}</h2>
                { movielist[fets].release_date ?
                  <p className="movie-release">
                    Release-Date : <span>{movielist[fets].release_date}</span>
                  </p> : <div>Release Date Not Available !</div>
                }
                { movielist[fets].vote_average ?
                  <p className="movie-rating">
                    Rating : <span>{movielist[fets].vote_average}</span>
                  </p> : <div>No Rating.</div>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SelectMovie {...select} />
    </div>
  );
}

export default Movies;
