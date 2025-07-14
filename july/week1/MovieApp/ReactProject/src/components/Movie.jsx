import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Movie = () => {
  const params = useParams();
  const api = import.meta.env.VITE_IMDB_API;
  const [movieDetails, setMovieDetails] = useState({});

  const handelGetMovie = async () => {
    try {
      const url = api + "&i=" + params.id;
      const result = await axios.get(url);

      if (result?.data) {
        setMovieDetails(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handelGetMovie();
  }, []);

  return (
    <div>
      <img src={movieDetails?.Poster} alt="" />
       <p className="text-6xl text-blue-950 "> Actor : {movieDetails?.Actors}</p><br />
      <p className="text-6xl text-blue-950">Awards : {movieDetails?.Awards}</p> <br />
      <p className="text-6xl text-blue-950">Country : {movieDetails?.Country}</p> <br />
      <p className="text-6xl text-blue-950"> Director : {movieDetails?.Director}</p> <br />
      <p className="text-6xl text-blue-950"> Type : {movieDetails?.Genre}</p><br />
      <p className="text-6xl text-blue-950">Language :{movieDetails?.Language}</p><br />
      <p className="text-6xl text-blue-950">Rated : {movieDetails?.Rated}</p><br />
      <p className="text-6xl text-blue-950">Runtime : {movieDetails?.Runtime}</p><br />
      <p className="text-6xl text-blue-950"> Year : {movieDetails?.Year}</p><br />
    </div>
  );
};

export default Movie;