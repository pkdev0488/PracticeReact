function Movie(props){
    console.log(props);
    const {title,url} = props;
    return(
        <div className="movie">
            <img src={url} alt={title}/>
            <h2>{title}</h2>
        </div>
    )
}
export default Movie;