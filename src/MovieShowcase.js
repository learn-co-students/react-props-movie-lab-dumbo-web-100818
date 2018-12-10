import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((movie, i) =>
      <MovieCard key={i} {...movie}/>
    )
  }
// can't use movie={movie} -_-
  // OR {...data} ( we don't have to assign the object an attribute apparently?)

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
