import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";

function MoviePage() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGIwMzNjMTRlYWQzZGNjNWI1MGI5NmY1Y2RhNDI1NSIsInN1YiI6IjY2NjA4ZWQxNzk5Y2VkYzMzYWYyNjc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-AopGEMHd18jKlzGbuY0m0KYABiWi85y15C731RUoQ";

  async function getData() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    setMovie(data);
  }
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div>
      {movie && (
        <div style={{ width: "50%", margin: "auto", position: "relative" }}>
          <Link
            to="/movies"
            style={{
              textDecoration: "none",
              position: "absolute",
              top: "10px",
              left: "30px",
              color: "black",
            }}
          >
            <FaArrowCircleLeft style={{ fontSize: "50px" }}/>
          </Link>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <div style={{ fontWeight: "bold", display: "flex", flexDirection: "column" }}>
            <p>Budget: {movie?.budget?.toLocaleString()} $</p>
            <p>Revenue: {movie?.revenue?.toLocaleString()} $</p>
            <p>Profit: {(movie?.revenue - movie?.budget)?.toLocaleString()} $</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviePage;
