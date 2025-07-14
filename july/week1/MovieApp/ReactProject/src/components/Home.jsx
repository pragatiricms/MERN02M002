import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_IMDB_API;

  const fetchMovies = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=avengers&apikey=${apiKey}`);
      const data = await res.json();
      if (data.Search) setMovies(data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600 mb-2 sm:mb-0">🎬 MovieApp</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/movies" className="text-gray-700 hover:text-indigo-600 font-medium">Movies</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 pb-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 md:p-10 rounded-xl text-center shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold">🎥 Movie App</h1>
          <p className="text-base md:text-lg mt-2">Your gateway to popular movies</p>
        </div>

        {/* Movie Grid */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">🔥 Trending Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-gray-100 rounded-lg shadow hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={
                    movie.Poster !== 'N/A'
                      ? movie.Poster
                      : 'https://via.placeholder.com/300x450?text=No+Image'
                  }
                  alt={movie.Title}
                  className="w-full h-52 sm:h-64 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-sm md:text-base font-semibold truncate">{movie.Title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
