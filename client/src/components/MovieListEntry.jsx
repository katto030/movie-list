import React from 'react';

const MovieListEntry = function (props) {
  var contain = props.status.includes(props.movie.title);

  var style = {
    backgroundColor: contain ? 'pink' : 'white'
  }

  return(
  <div className="movieListEntry">
      <span id="movieTitle">{props.movie.title}</span>
      <button style={style} id="yes" value={props.movie.title} onClick={(e) => props.toggle(e)}>Watched</button>
    </div>
  );
}

export default MovieListEntry;