
function MoviePagination({ page, setPage }) {
    function handleNext() {
        setPage(page + 1);
    }
    function handlePrev() {
        setPage(page - 1);
    }
    return (
        <div className="d-flex justify-content-center align-items-center gap-3">
            <button
                className="btn btn-primary"
                onClick={handlePrev}
                disabled={page === 1}
            >
                Previous
            </button>
            <h3 className="m-0">Page {page}</h3>
            <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={page === 20}
            >
                Next
            </button>
        </div>
    )
}

export default MoviePagination