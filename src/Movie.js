import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} />
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>

                <div className="Movie__Genres">
                {console.log(genres)}
                    {genres && genres.length > 0 && genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>

                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>

        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="img" /> 
        // class가 아니라서 this.props를 쓰지 않는다는건 무슨말
        // 함수형 컴포넌트니까, 파라미터로 받으니까
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}


export default Movie;