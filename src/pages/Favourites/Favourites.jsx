import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
const { deleteAllFavourites } = require("../../store/slices/favourite");
function Favourites() {
  const favourites = useSelector((state) => state.favourite.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="">Favourites</h1>
      {favourites && favourites.length ? <button
        className="btn btn-danger mb-3"
        onClick={() => dispatch(deleteAllFavourites())}
      >
        Delete All
      </button> : null}
      <div className="row d-flex justify-content-center align-items-center">
        {favourites && favourites.length ? (
          favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} favourites={favourites} />
          ))
        ) : (
          <h1 className="mt-5">There are no favourites yet</h1>
        )}
      </div>
    </div>
  );
}

export default Favourites;
