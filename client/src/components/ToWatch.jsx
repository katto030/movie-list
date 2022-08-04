import React from 'react';

const ToWatch = (props) => (
  <div className="toWatch">
    <button onClick={props.click} id="to-watch">ToWatch</button>
  </div>
);

export default ToWatch;