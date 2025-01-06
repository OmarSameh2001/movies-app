import { useContext, useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import LanguageContext from "../../context/language";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { lang, setLang } = useContext(LanguageContext);
    function toggleDropdown() {
        setOpen(!open);
    }
  return (
    <div
      className="navbar px-5"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="logo">
        <Link to="/movies" style={{ textDecoration: "none", color: "black" }}>
          <h1>Movie App</h1>
        </Link>
      </div>
      <div className="links d-flex align-items-center gap-3">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            onClick={toggleDropdown}
          >
            {lang}
          </button>
          <ul className="dropdown-menu" style={{ display: open ? "block" : "none" }}>
            <li>
              <p className="dropdown-item p-0 m-0 text-center" onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{cursor: "pointer"}}>
                {lang === "en" ? "Arabic" : "English"}
              </p>
            </li>
          </ul>
        </div>
        <Link
          to="/register"
          className="links d-flex align-items-center gap-2"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FaUser />
          <p className="m-0">Register</p>
        </Link>
        <Link
          to="/favourites"
          className="links d-flex align-items-center gap-2"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FaHeart />
          <p className="m-0">Favourites</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
