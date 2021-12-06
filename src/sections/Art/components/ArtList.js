import ArtListItem from './ArtListItem'

function ArtList(props) {
    console.log("my props list: ", props.artList)
    return(
        <ul className="art-list">
            {props.artList.map(art =>
                <ArtListItem art={art}/>
            )}
        </ul>
    )   
}

export default ArtList