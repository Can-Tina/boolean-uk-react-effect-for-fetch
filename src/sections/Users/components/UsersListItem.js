function UsersListItem(props) {
    console.log("user", props.user)
    return (
        <li key={props.index} className={`${props.user.gender === "female" ? "bg-pink" : "bg-blue"}`}>
            <img src={props.user.picture.medium} alt={props.user.name.first + " " + props.user.name.last}/>
            <h3>{props.user.name.title + " " + props.user.name.first + " " + props.user.name.last}</h3>
            <p>Email: {props.user.email}</p>
        </li>
    )
} 

export default UsersListItem