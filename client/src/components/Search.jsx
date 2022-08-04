import React from 'react';

const Search = (props) => (
  <div className="search">
    <form id="searchForm" onChange={(e) => props.submit(e)} onSubmit={() => props.click()}>
      <input type="text" placeholder="Search movie.."></input>
      <button type="submit">Go!</button>
    </form>
  </div>
);

export default Search;