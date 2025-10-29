
import { useEffect, useState } from "react"

export function App() {

  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [tracks, setTracks] = useState(null
  )


  useEffect(() => {
    console.log("effect")
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: {
        "api-key": "",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data)
      })
  }, [])


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
      <h1 style={{ marginLeft: 40 }}>LP Player</h1>
      <button style={{ marginLeft: 40, backgroundColor: 'blue' }} onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}>Reset selection
      </button>

      <div style={{ display: 'flex', gap: 30 }}>
        <ul>
          {tracks.map((track) => {
            return <li key={track.id}
              style={{
                border: track.id === selectedTrackId ? '1px solid orange' : ''
              }}>
              <div onClick={() => {
                setSelectedTrackId(track.id)
                fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + track.id,
                  {
                    headers: {
                      "api-key": "",
                    },
                  })
                  .then((res) => res.json())
                  .then((json) => {
                    setSelectedTrack(json.data)
                  })

              }}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
          })}
        </ul>
        <div>
          <h2>Details</h2>
          {!selectedTrack && !selectedTrackId && 'Track is not selected'}
          {!selectedTrack && selectedTrackId && "Loading..."}
          {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && "Loading..."}
          {selectedTrack && (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>
                {selectedTrack.attributes.lyrics ?? 'No lyrics'}
              </p>
            </div>
          )}
        </div>
      </div>
    </ >
  )
}
