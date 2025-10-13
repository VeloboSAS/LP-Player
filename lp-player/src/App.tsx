import Pale from "./sound/Pale.mp3"
import Rest from "./sound/Rest.mp3"
import Numb from "./sound/Numb.mp3"
import End from "./sound/End.mp3"
import Faint from "./sound/Faint.mp3"
import { useState } from "react"


// const tracks = null
const tracks = [
  { id: 1, title: "LP track1", url: Pale },
  { id: 2, title: "LP track2", url: Rest },
  { id: 3, title: "LP track3", url: Numb, isSelected: true },
  { id: 4, title: "LP track4", url: End },
  { id: 5, title: "LP track5", url: Faint },
  { id: 6, title: "LP track6", url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },

]


export function App() {

  const [selectedTrackId, setSelectedTrackId] = useState(1)



  if (tracks === null) {
    return <> <div>
      <h1>LP Player</h1>
      <span>Loading...</span>
    </div>
    </>
  }

  if (tracks.length === 0) {
    return <> <div>
      <h1>LP Player</h1>
      <span>No tracks</span>
    </div>
    </>
  }

  return (
    <>
      <h1>LP Player</h1>
      <button onClick={() => {
        setSelectedTrackId(null)
      }}>Reset selection</button>
      <ul>
        {tracks.map((track) => {
          return <li key={track.id} style={{
            border: track.id === selectedTrackId ? '1px solid orange' : 'none'
          }}>
            <div onClick={() => {
              setSelectedTrackId(track.id)
            }}>
              {track.title}
            </div>
            <audio src={track.url} controls></audio>
          </li>
        })}
      </ul>


    </ >
  )
}
