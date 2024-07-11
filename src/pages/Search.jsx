// 검색하면 영화정보가 등장하는 페이지

import React, { useState } from 'react';
import '../styles/Search/Search.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const MOVIE_API = process.env.REACT_APP_MOVIE_API;

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${MOVIE_API}&movieNm=${searchQuery}`
      );
      const data = await response.json();
      if (data.movieListResult.movieList) {
        setMovies(data.movieListResult.movieList);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchMovies(query.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="작품, 배우를 검색해보세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.movieCd} className="movie-item">
              <h3>
                {movie.movieNm} ({movie.prdtYear})
              </h3>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
