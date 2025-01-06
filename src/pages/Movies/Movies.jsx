import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MoviePagination from "../../components/MoviePaginaition/MoviePagination";
import { useSelector } from "react-redux";
import LanguageContext from "../../context/language";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const {lang} = useContext(LanguageContext)
  const favourites = useSelector((state) => state.favourite.value);
  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_Base_Url
  
  async function getData() {
    const language = lang === "en" ? "en-US" : "ar-SA"
    const url = searchTerm
      ? `${baseUrl}movie?query=${searchTerm}&language=${language}`
      : `${baseUrl}movie/popular?page=${page}&language=${language}`;
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
  }, [searchTerm, page, lang]);
  
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
