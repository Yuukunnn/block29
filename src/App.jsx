
import { Routes, Route, useNavigate} from 'react-router-dom';
import AllPlayers from './Components/AllPlayers'
import SinglePlayer from './Components/SinglePlayer';
import NewPlayerForm from './Components/NewPlayerForm';
import './App.css'




function App() {

  const navigate= useNavigate();
  return (
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/:playerId" element={<SinglePlayer />}/>
      <Route path="/new" element={<NewPlayerForm />} />
    </Routes>

  )
}

export default App
