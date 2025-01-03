import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className="navbar px-5" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="logo">
                <Link to="/movies" style={{textDecoration: "none", color: "black"}}>
                    <h1>Movie App</h1>
                </Link>
            </div>
            <div className="links d-flex align-items-center gap-2" style={{cursor: "pointer"}}>
                <FaHeart />
                <p className="m-0">Watchlist</p>
            </div>
        </div>
    );
}

export default Navbar;