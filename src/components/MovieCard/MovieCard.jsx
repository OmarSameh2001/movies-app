import { useNavigate } from "react-router";
import {
  addFavourite,
  deleteFavourite,
} from "../../store/slices/favourite";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";

function MovieCard(props) {
  const { movie, favourites } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick() {
    navigate(`/movies/${movie.id}`);
  }
  
  return (
    <div className="card col-md-3 m-3" key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title + " poster"}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <div
        className="card-body"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.release_date}</p>
      </div>
      {favourites && (
        <FaHeart
          onClick={() => {
            if (favourites.find((m) => m.id === movie.id)) {
              dispatch(deleteFavourite(movie.id));
            } else {
              dispatch(addFavourite(movie));
            }
          }}
          style={{
            cursor: "pointer",
            color: favourites.find((m) => m.id === movie.id) ? "gold" : "black",
            margin: "auto",
            marginBottom: "10px",
          }}
        />
      )}
    </div>
  );
}

export default MovieCard;
