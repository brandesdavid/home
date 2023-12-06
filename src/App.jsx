
import './App.css'

import Home from './routes/Home'
import Projects from './routes/Projects'
import Contact from "./routes/Contact"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
        
      <Footer/>
      </Router>
    </>
   
  )
}

export default App
