import ArtListItem from './ArtListItem'

function ArtList(props) {
    return(
        <ul class="art-list">
            {props.artList.data.map(art =>
                <ArtListItem art={art}/>
            )}
        </ul>
    )
}

export default ArtList