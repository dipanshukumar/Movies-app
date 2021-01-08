import "./Maincomp.scss";
import React, { useState } from "react";
import Movies from "./Movies/Movies";

function Maincomp() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetdata, setFetData] = useState([]);

  const searchmov = () => {
    let movie_name = document.querySelector("#search_name").value;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0f1c9e912a1900c7e9cda5caa96b4f3a&query=${movie_name}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFetData(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setFetData(error);
        }
      );

      console.log(fetdata);
  };

  return (
    <React.Fragment>
      <header>
        <input type="text" id="search_name" />
        <button onClick={searchmov}>Search</button>
      </header>
      {isLoaded ? <Movies {...fetdata} /> : <div className="Message">Search For A Movie Name...</div>}
    </React.Fragment>
  );
}

export default Maincomp;
