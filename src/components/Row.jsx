import React, { useState, useEffect } from "react";
import Modal from './Modal'
import axios from "../axios";

import movieTrailer from "movie-trailer";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const opts = {
    height: "600px",
    width: "1200px",
    playerVars: {
      autoplay: 1,
    },
  };

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handle = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
          // console.log(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

 

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movies.map((movie) => (
            <>
            <img
              onClick={() => {
                handle(movie);
              }}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title || movie?.original_name}
            />
            {/* <h5 style={{color:"white" }}>{movie?.name || movie?.title || movie?.original_name}</h5> */}
            </>
          ))}
        </div >
       {trailerUrl && <Modal setTrailerUrl={setTrailerUrl} trailerUrl={trailerUrl} opts={opts} /> }
        
      </div>
    </>
  );
};

export default Row;
