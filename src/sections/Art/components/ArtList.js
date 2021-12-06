import ArtListItem from './ArtListItem'

function ArtList(props) {
    return(
        <ul className="art-list">
            {props.artList.map(art =>
                <ArtListItem art={art}/>
            )}
        </ul>
    )   
}

export default ArtList