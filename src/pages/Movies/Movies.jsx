import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MoviePagination from "../../components/MoviePaginaition/MoviePagination";
import { useSelector } from "react-redux";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const favourites = useSelector((state) => state.favourite.value);
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGIwMzNjMTRlYWQzZGNjNWI1MGI5NmY1Y2RhNDI1NSIsInN1YiI6IjY2NjA4ZWQxNzk5Y2VkYzMzYWYyNjc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-AopGEMHd18jKlzGbuY0m0KYABiWi85y15C731RUoQ";

  async function getData() {
    const url = searchTerm
      ? `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`
      : `https://api.themoviedb.org/3/movie/popular?page=${page}`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    setMovies(data.results);
  }

  function handleSearch(searchText) {
    setSearchTerm(searchText);
  }
  function handleReset() {
    setSearchTerm("");
  }
  useEffect(() => {
    getData();
  }, [searchTerm, page]);
  
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center gap-3">
            <h1>Movies</h1>
            {!searchTerm && <MoviePagination page={page} setPage={setPage}/>}
        </div>
      <MovieSearch handleSearch={handleSearch} handleReset={handleReset} />
      <div className="row d-flex justify-content-center align-items-center">
        {movies.length > 0 ?
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} favourites={favourites}/>;
          }) : <h1 className="mt-3">No movies found for {searchTerm}</h1>}
      </div>
    </div>
  );
}

export default Movies;
