import { useEffect, useState } from "react"
 
export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(0)
  const selectedTrackId = '40941736-77b7-4bb0-b3b2-ca1e31e1f4a6'
 
  useEffect(() => {
    if (!selectedTrackId) {
      return
    }
 
    fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId, {
      headers: { "api-key": "" },
    })
      .then((res) => res.json())
      .then((json) => {
        setSelectedTrack(json.data)
      })
  }, [selectedTrackId])
 
  return (
    <div>
      <h2 style={{textAlign: 'center' }}>Details</h2>
      {!selectedTrack && !selectedTrackId && "Track is not selected."}
      {!selectedTrack && selectedTrackId && "Loading..."}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  )
}