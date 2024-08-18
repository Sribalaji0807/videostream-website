import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Pages/Home'
import AnimeVideo from './Components/Pages/AnimeVideo'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video' element={<AnimeVideo/>} />
    </Routes>
   </Router>
  )
}

export default App
