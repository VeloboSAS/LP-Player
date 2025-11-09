// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import SideBar from './components/SideBar'
import {PageTitle} from './components/PageTitle'
import './index.css'
import {TrackList} from './components/TrackList'
import {TrackDetail} from './components/TrackDetail'
import Footer from './components/Footer'
// import {App} from './App'


const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(<MainPage />)

function MainPage() {
    return <div>
        <Header />
        <SideBar />
        <PageTitle />
        <div style= {{display: 'flex',gap: 50}}>
            <TrackList />
            <TrackDetail />
        </div>
        <Footer />

    </div>
}
