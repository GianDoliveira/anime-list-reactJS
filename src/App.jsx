import { useEffect, useState } from "react"
import SearchInput from "./configureSearch/Search"
import "./style.css"
function App() {

  const [info, setInfo] = useState({})
  const [text, setText] = useState('')

  useEffect(() => {
    setInfo([])
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response)
        console.log(response)
      })
  }, [text])

  return (
    <div className="App">
      <div className="search">
        <h1 className="h1Title stylesHover">Animes</h1>
        <SearchInput
          value={text}
          onChange={search => setText(search)}
        />
      </div>
      {info.data && (
        <ul>
          {info.data.map((item) => (
            <li key={item.id} className="list">
              <img className="imageAnime" src={item.attributes.posterImage.small} alt={item.attributes.canonicalTitle}></img>
              <div className="description">
                <i className="title stylesHover">
                  {item.attributes.canonicalTitle}
                </i>
                <i className="stylesHover">
                  {item.attributes.description}
                </i>
                <i className="stylesHover">
                  Episodes: {item.attributes.episodeCount}
                </i>
                <i className="stylesHover">
                  Release year: {item.attributes.startDate}
                </i>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>


  )
}

export default App
