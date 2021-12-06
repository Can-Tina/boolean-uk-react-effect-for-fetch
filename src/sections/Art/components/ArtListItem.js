import SubjectList from './SubjectList'

function ArtListItem(props) {
    return (
        <li key={props.art.id}>
            <div className="frame">
                <img
                src={`https://www.artic.edu/iiif/2/${props.art.image_id}/full/843,/0/default.jpg`}
                alt={props.art.title}
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