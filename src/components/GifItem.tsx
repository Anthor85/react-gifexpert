

export const GifItem = ({... props}) => { //Paso de props IMPORTANTE
    return <div className="card">
        <img src={props.url} alt={props.title} />
        <p>{props.title}</p>
    </div>
}