import Movie from "./Movie.jsx";
import moviesData from "./data.js";
function Movies(){
    return(
        <div className="movies">
            {
                moviesData.map((m)=>(
                    <Movie url={m.image} title={m.title}/>
                ))
            }
            
        </div>
    )
}
export default Movies;