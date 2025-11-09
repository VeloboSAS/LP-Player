import { useEffect, useState } from "react"
import {PageTitle} from "./PageTitle"

export  function TrackList() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)
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
          <PageTitle/>
          <span>Loading...</span>
        </div>
        </>
      }
    
      if (tracks.length === 0) {
        return <> <div>
          <PageTitle/>
          <span>No tracks</span>
        </div>
        </>
      }

    return <div>
        <h2 style={{textAlign: 'center' }}>TrackList</h2>
         <ul>
          {tracks.map((track) => {
            return <li key={track.id}
              style={{
                border: track.id === selectedTrackId ? '1px solid orange' : ''
              }}>
              <div onClick={() => {
                setSelectedTrackId(track.id)
              }}>
                {track.attributes.title}
              </div>
              <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
          })}
        </ul>
    </div>
}
