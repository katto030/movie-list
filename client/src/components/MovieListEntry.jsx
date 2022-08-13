import React from 'react';

const MovieListEntry = function (props) {
  var style = {
    backgroundColor: props.movie.status === 'watched' ? 'pink' : 'white'
  }

  return(
  <div className="movieListEntry">
      <span id="movieTitle">{props.movie.title}</span>
      <button style={style} id="yes" value={props.movie.title} onClick={(e) => props.toggle(e)}>Watched</button>
    </div>
  );
}

export default MovieListEntry;