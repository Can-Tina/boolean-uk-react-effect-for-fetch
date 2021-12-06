import { useEffect, useState } from "react"
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(response => response.json())
      .then(data => {
        console.log("data: ", data.data)
        setArtList(data.data)
      });
  }, [])

  if (artList == undefined) {
    return <p>Just One Sec!</p>
  } else {
    return (
      <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
          <ArtList artList={artList}/>
        </div>
      </section>
    )

    }
  }
  
export default ArtsSection
