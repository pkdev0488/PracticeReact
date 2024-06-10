function Movie(props){
    //console.log(props);
    //const {title,url} = props; destructuring
    //Task on 13th class: Display set of books using 3 components:Book library(contains 5 books of 3 categories each[fiction, non-fiction, fantasy] it uses books component each time), Books(it uses book component 5 times with different values like book image, book name and price), Book(It prints all the books with interactive UI and also try to print the books with price more then 200 separetely)
    return(
        <div className="movie">
            <img src={props.url} alt={props.title}/>
            {props.rating<8 && (<p>rating:{props.rating}</p>)}
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <button onClick={()=>props.fun(props.title)}>see the movie</button>
        </div>
    )
}
export default Movie;