import { useState } from 'react'
import Header from './component/header'
import StarRating from './component/Stars.jsx'
import Subtitle from './component/Subtitle.jsx'
import Secondary from './component/Secondary'
import './App.css'
import './style.scss'

function App() {


  return (
    <div className="App">
      <Header className="App-header" />
      <StarRating />
      <Secondary />
      <Subtitle />
    </div>
  )
}

export default App
