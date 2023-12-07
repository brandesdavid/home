
import './styles/App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'

import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from "./routes/Contact"



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
       
       
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route element={<Layout/>}>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/projects" element={<Projects />}/>
              <Route exact path="/contact" element={<Contact />}/>
              
            </Route>
            <Route path='*' element={<Home />}/>
          </Routes>
        
      <Footer/>
      </Router>
    </>
   
  )
}

export default App
