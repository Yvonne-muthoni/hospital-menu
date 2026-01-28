import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Menupage from './pages/Menupage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menupage" element={<Menupage />} />
    </Routes>
  )
}

export default App
