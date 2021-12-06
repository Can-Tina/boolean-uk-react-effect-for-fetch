function SubjectList(props) {
    return(
        <ul>
            {props.art.subject_titles.map(subjectTitle =>
            <li>{subjectTitle}</li>
            )}
        </ul>
    )
}

export default SubjectList