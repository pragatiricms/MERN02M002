import React from 'react';
import { Routes, Route } from "react-router";
import Home from '../components/Home';
import Movies from '../components/Movies';
import Movie from '../components/Movie';

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Movies/>} path="/movies" />
      <Route element={<Movie/>} path="/movie/:id" />
    </Routes>
  );
};

export default AllRoutes
