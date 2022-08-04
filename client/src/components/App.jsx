import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';
import movies from './exampleData.js';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';



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

    this.state = {
      movieList: [],
      currList: [],
      search: '',
      toAdd: '',
      watched: [],
      toWatch: []
    }
  }

  componentDidMount() {
    this.setState({
      movieList: [],
      currList: [],
    })
  }

  handleSubmitChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmitClick() {
    event.preventDefault();
    var temp = [];
    var target = this.state.search.toLowerCase();
    this.state.movieList.forEach(function(movie) {
      var test = movie.title.toLowerCase().includes(target);
      if (test) {
        temp.push(movie);
      }
    })

    if (temp.length === 0) {
      temp = [{title: 'no movie by that name found'}]
    }

    this.setState({
      currList: temp
    })
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
    var temp = this.state.movieList.slice();
    temp.unshift(toAddMovie)
    var tempToWatch = this.state.toWatch.slice();
    tempToWatch.push(this.state.toAdd);
    this.setState({
      movieList: temp,
      currList: temp,
      toWatch: tempToWatch
    })
    document.getElementById('addForm').reset();
  }

  handleToWatchClick() { // Change to ToWatch tab?
    var mapped = this.state.toWatch.map(function(movie) {
      return {title: movie};
    })
    this.setState({
      currList: mapped
    })
  }

  handleWatchedClick() {
    var mapped = this.state.watched.map(function(movie) {
      return {title: movie}
    })
    this.setState({
      currList: mapped
    })
  }

  handleToggleClick(event) {
    var curr = event.target.value;
    var tempWatched = this.state.watched.slice();
    var tempToWatch = this.state.toWatch.slice();
    var contain = tempWatched.includes(curr);

    if (contain) {
      tempWatched.splice(tempWatched.indexOf(curr), 1);
      tempToWatch.push(curr);
    } else {
      tempToWatch.splice(tempToWatch.indexOf(curr), 1);
      tempWatched.push(curr);
    }

    this.setState({
      watched: tempWatched,
      toWatch: tempToWatch,
    })
  }

  render() {
    return (
      <div>
        <div className="nav">
          <div className="header">
            <h1>MovieList</h1>
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