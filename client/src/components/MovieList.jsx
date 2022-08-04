import exampleData from './exampleData.js'
import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => (
  <div className="movieList">
    {props.movies.map(movie =>
      <MovieListEntry status={props.status} toggle={props.toggle} movie={movie} />
      )}
  </div>
);


export default MovieList;