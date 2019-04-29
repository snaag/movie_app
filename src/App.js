import React from 'react';
import './App.css';
import Movie from './Movie'


class App extends React.Component {

  state = {}

  componentDidMount(){
    this._getMovies();
  }
   
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?quality=3D?order_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        ></Movie>
    })

    return movies
  }

  _renderLoading = () => {
    const url = "https://loading.io/spinners/rolling/index.curve-bars-loading-indicator.gif"
    return <img src={url} alt='img'></img>
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._renderLoading() }
      </div>
    );
  }
} 

export default App;
