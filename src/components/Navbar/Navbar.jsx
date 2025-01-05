import { FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
    return (
        <div className="navbar px-5" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="logo">
                <Link to="/movies" style={{textDecoration: "none", color: "black"}}>
                    <h1>Movie App</h1>
                </Link>
            </div>
            <div className="links d-flex align-items-center gap-3">
                <Link to="/register" className="links d-flex align-items-center gap-2" style={{textDecoration: "none", color: "black"}}>
                    <FaUser />
                    <p className="m-0">Register</p>
                </Link>
                <Link to="/favourites" className="links d-flex align-items-center gap-2" style={{textDecoration: "none", color: "black"}}>
                    <FaHeart />
                    <p className="m-0">Favourites</p>
                </Link>
            </div>
            
        </div>
    );
}

export default Navbar;