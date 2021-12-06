function SubjectList(props) {
    return(
        <ul>
            {props.art.subject_titles.map((subjectTitle, index) =>
            <li key={index}>{subjectTitle}</li>
            )}
        </ul>
    )
}

export default SubjectList