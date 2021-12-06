import { useEffect, useState } from "react"
import ArtList from "../Art/components/ArtList";
import UsersList from "./components/UsersList"

function UsersSection() {
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setUserList(data.results)
      });
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userList={userList} />
      </div>
    </section>
  )
}

export default UsersSection
