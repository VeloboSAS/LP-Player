const  tracks = [
    {title: "LP track1", url:"Pale.mp3"},
    {title: "LP track2", url:"Rest.mp3"},
    {title: "LP track3", url:"Numb.mp3"},
    {title: "LP track4", url:"End.mp3"},
    {title: "LP track5", url:"Faint.mp3"},

]

const rootEl = document.getElementById('root')
const headerEl = document.createElement('h1')


headerEl.append('LP Player')
rootEl.append(headerEl)

const tracksEl = document.createElement('ul')
tracks.forEach((track) => {
    const trackEl = document.createElement('li')
    const trackTitleEl = document.createElement('div')
    trackTitleEl.append(track.title)
    trackEl.append(trackTitleEl)

    const trackPlayerEl = document.createElement('audio')
    trackPlayerEl.controls = true
    trackPlayerEl.src = track.url
    trackEl.append(trackPlayerEl)
    tracksEl.append(trackEl)
})
rootEl.append(tracksEl)
