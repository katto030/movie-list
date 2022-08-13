import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import movies from './exampleData.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';
var parse = require('./parse.js')


class App extends React.Component {
  constructor(props) {
    super(props);

    this.addChange = this.handleAddChange.bind(this);
    this.addClick = this.handleAddClick.bind(this);
    this.submitChange = this.handleSubmitChange.bind(this);
    this.submitClick = this.handleSubmitClick.bind(this);
    this.toggle = this.handleToggleClick.bind(this);
    this.watchedClick = this.handleWatchedClick.bind(this);
    this.toWatchClick = this.handleToWatchClick.bind(this);
    this.titleClick = this.titleClick.bind(this);

    this.state = {
      movieList: [],
      currList: [],
      search: '',
      toAdd: ''
    }
  }

  componentDidMount() {
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
    });
  }

  handleSubmitChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmitClick() {
    event.preventDefault();
    var target = this.state.search.toLowerCase();
    parse.getAll((results) => {
      var searchResult = results.filter((movie) => {
        return movie.title.toLowerCase() === target;
      })
      searchResult.length ? null : searchResult = [{title: 'no movie by that name found'}];
      this.setState({
        movieList: results,
        currList: searchResult
      });
    });
    document.getElementById('searchForm').reset();
  }

  handleAddChange(event) {
    this.setState({
      toAdd: event.target.value
    })
  }

  handleAddClick() {
    event.preventDefault();
    var toAddMovie = {title: `${this.state.toAdd}`}
    parse.addMovie(toAddMovie);
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
    });
    document.getElementById('addForm').reset();
  }

  handleToWatchClick() {
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
      var temp = this.state.movieList.filter((movie) => {
        return movie.status === 'unwatched';
      })
      this.setState({
        currList: temp
      });
    });
  }

  handleWatchedClick() {
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
      var temp = this.state.movieList.filter((movie) => {
        return movie.status === 'watched';
      })
      this.setState({
        currList: temp
      });
    });
  }

  handleToggleClick(event) {
    var curr = event.target.value;
    var targetMovie = this.state.movieList.find((movie) => (movie.title === curr));
    parse.updateStatus(targetMovie);
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
    });
  }

  titleClick() {
    parse.getAll((results) => {
      this.setState({
        movieList: results,
        currList: results
      });
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <div className="header">
            <h1 onClick={this.titleClick}>MovieList</h1>
          </div>
          <div className="bars">
            <AddMovie add={this.addChange} click={this.addClick}/>
            <Search submit={this.submitChange} click={this.submitClick}/>
          </div>
          <div className="watchToggle">
            <ToWatch click={this.toWatchClick}/>
            <Watched click={this.watchedClick}/>
          </div>
        </div>
        <div><MovieList status={this.state.watched} toggle={this.toggle} movies={this.state.currList}/></div>
      </div>
    )
  }
}

export default App;