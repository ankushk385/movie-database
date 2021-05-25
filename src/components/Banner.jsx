import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import Requests from "../requests";
// const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner-info">
          <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
          <p>{movie?.overview}</p>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
