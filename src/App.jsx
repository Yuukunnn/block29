
import { Routes, Route, } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers'
import SinglePlayer from './Components/SinglePlayer';
import './App.css'




function App() {

  return (
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:playerId" element={<SinglePlayer />}/>
    </Routes>
  )
}

export default App
