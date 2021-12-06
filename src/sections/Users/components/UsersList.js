import UsersListItem from './UsersListItem'

function UsersList(props) {
    return(
        <ul className="users-list">
            {props.userList.map((user, index) =>
            <UsersListItem user={user} index={index}/>
            )}
        </ul>
    )   
}

export default UsersList