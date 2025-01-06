import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaArrowCircleLeft, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite, addFavourite } from "../../store/slices/favourite";
import { useNavigate, useParams } from "react-router";
import LanguageContext from "../../context/language";

function MoviePage() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.value);
  const {lang} = useContext(LanguageContext)
  const apiKey = process.env.REACT_APP_API_KEY
  const baseUrl = process.env.REACT_APP_Base_Url

  async function getData() {
    const { data } = await axios.get(
      `${baseUrl}movie/${id}?language=${lang}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    setMovie(data);
  }
  function handleBack() {
    navigate(-1);
  }
  function handleDelete(id) {
    dispatch(deleteFavourite(id));
    handleBack();
  }
  useEffect(() => {
    getData();
  }, [id, lang]);
  return (
    <div>
      {movie && (
        <div style={{ width: "50%", margin: "auto", position: "relative" }}>
          <div
            onClick={handleBack}
            style={{
              textDecoration: "none",
              position: "absolute",
              top: "10px",
              left: "30px",
              color: "black",
              cursor: "pointer",
            }}
          >
            <FaArrowCircleLeft style={{ fontSize: "50px" }} />
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <h1>{movie.title}</h1>
            <FaHeart
              style={{ fontSize: "30px", color: favourites.find((m) => m.id === movie.id) ? "gold" : "black", cursor: "pointer" }}
              onClick={(e) => {
                if (favourites.find((m) => m.id === movie.id)) {
                  handleDelete(movie.id);
                } else {
                  dispatch(addFavourite(movie));
                }
              }}
            />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="poster"
          />
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          {movie.budget && movie.revenue ? (
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>Budget: {movie?.budget?.toLocaleString()} $</p>
              <p>Revenue: {movie?.revenue?.toLocaleString()} $</p>
              <p>
                Profit: {(movie?.revenue - movie?.budget)?.toLocaleString()} $
              </p>
            </div>
          ) : (
            <p style={{ fontWeight: "bold" }}>
              There is no budget or revenue data for this movie
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default MoviePage;
