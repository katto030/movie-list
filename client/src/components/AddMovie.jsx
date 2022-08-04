import React from 'react';

const AddMovie = (props) => (
  <div className="addMovie">
    <form id="addForm" onChange={(e) => props.add(e)} onSubmit={() => props.click()}>
      <input type="text" placeholder="Add movie title here"></input>
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddMovie;