import { useNavigate } from "react-router";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh"}}>
            <h1>NotFound</h1>
            <button className="btn btn-primary" onClick={() => navigate("/movies")}>Go to movies</button>
        </div>
    );
}

export default NotFound;