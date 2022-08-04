import React from 'react';

const Watched = (props) => (
  <div className="watched">
    <button onClick={props.click}id="watched">Watched</button>
  </div>
);

export default Watched;