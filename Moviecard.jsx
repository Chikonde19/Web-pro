function Moviecard({Movie}){

    function onFavoriteClick(){
        alert("clicked")
    }

    return <div className="Movie-card">
           <div className="movie-poster">
                <img scr={Movie.url} alt={Movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-bnt"onClick={onFavoriteClick}>

                    </button>
                </div>
        </div>
        <div className ="movie-info">
            <h3>{Movie.title}</h3>
            <p>{Movie.release_date}</p>

        </div>
    </div>
}
export default Moviecard 