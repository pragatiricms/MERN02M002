import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState('');
  const api = import.meta.env.VITE_IMDB_API;
  const navigate = useNavigate();

  const getMovies = async (s = 'avengers') => {
    try {
      const url = `${api}&s=${s}`;
      const result = await axios.get(url);
      if (result.data.Response === 'True') {
        setMoviesData(result.data.Search);
      } else {
        setMoviesData([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = () => {
    getMovies(search);
  };

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      {/* Centered Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          value={search}
          placeholder="Search movies..."
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none"
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Movie Cards in Grid (Line-by-Line, Horizontally Per Row) */}
      {moviesData.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {moviesData.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
              className="bg-gray-100 rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <p className="font-bold truncate">{movie.Title}</p>
                <p className="text-sm text-gray-600">{movie.Year}</p>
                <p className="text-xs text-gray-500">{movie.Type}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No movies found.</p>
      )}
    </div>
  );
};

export default Movies;
