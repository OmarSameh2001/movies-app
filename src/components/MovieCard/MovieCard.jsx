import { useNavigate } from "react-router";

function MovieCard(movie) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/movies/${movie.movie.id}`);
    }
    return (
        <div className="card col-md-3 m-3" key={movie.movie.id} onClick={handleClick} style={{cursor: "pointer"}}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.movie.poster_path}`} className="card-img-top" alt={movie.movie.title + " poster"}/>
            <div className="card-body">
                <h5 className="card-title">{movie.movie.title}</h5>
                <p className="card-text">{movie.movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;