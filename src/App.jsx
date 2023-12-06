
import './App.css'

import Home from './routes/Home'
import Projects from './routes/Projects'
import Contact from "./routes/Contact"
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>

      </Router>
    </>
   
  )
}

export default App
