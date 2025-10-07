import Pale from "./sound/Pale.mp3"
import Rest from "./sound/Rest.mp3"
import Numb from "./sound/Numb.mp3"
import End from "./sound/End.mp3"
import Faint from "./sound/Faint.mp3"

function App() {
  const tracks = [
    { id:1, title: "LP track1", url: Pale },
    { id:2, title: "LP track2", url: Rest },
    { id:3, title: "LP track3", url: Numb },
    { id:4, title: "LP track4", url: End },
    { id:5, title: "LP track5", url: Faint },

  ]

  return (
    <>
      <h1>LP Player</h1>
      <ui>
        {tracks.map((track) => {
          return <li key ={track.id}>
            <div>
              {track.title}
            </div>
            <audio src={track.url} controls></audio>
          </li>
        })}
      </ui>
    </ >
  )
}

export default App
