import { useState } from "react";

function MovieSearch(props) {

  const [searchTerm, setSearchTerm] = useState("");

  const { handleSearch, handleReset } = props;

  function reset() {
    setSearchTerm("");
    handleReset();
  }
  return (
    <div className="d-flex justify-content-center align-items-center gap-1">
      <div class="input-group" style={{ width: "fit-content" }}>
        <span className="input-group-text" id="basic-addon1">
          Movie Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter movie name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Please enter movie name"
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => handleSearch(searchTerm)}
      >
        Search
      </button>
      <button className="btn btn-danger" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default MovieSearch;
