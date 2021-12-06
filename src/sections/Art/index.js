import { useEffect, useState } from "react"
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(res => res.json())
      .then(data => {
        setArtList(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ArtList artList={artList}/>
      </div>
    </section>
  )

  }

export default ArtsSection
