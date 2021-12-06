import SubjectList from './SubjectList'

function ArtListItem(props) {
    return (
        <li>
            <div class="frame">
                <img
                src={`https://www.artic.edu/iiif/2/${props.art.image_id}/full/843,/0/default.jpg`}
                />
            </div>
            <h3>{props.art.title}</h3>
            <p>Artist: {props.art.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <SubjectList art={props.art}/>
        </li>
    )
} 

export default ArtListItem