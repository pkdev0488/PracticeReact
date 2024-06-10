import Movie from "./Movie.jsx";
import moviesData from "../data.js";
function Movies(){
    function print(name){
        //console.log("Movie name is "+ props.title);
        alert("button clicked from parent is"+name);
    }
    return(
        <div className="movies">
            {
                moviesData.map((m)=>(
                    <Movie url={m.image} title={m.title} fun={print} rating={m.rating}>
                        <p>{m.title}</p>
                    </Movie>
                ))
            }
            
        </div>
    )
}
export default Movies;