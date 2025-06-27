import React from 'react'

import { BrowserRouter as Router ,Routes,Route, Link } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Project from './Pages/Project'

const App = () => {
  return (
   <>
   <Router>
        <div>
          <Link to="/" className=''></Link>
         
        
        </div>



    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
      
    </Routes>
   </Router>
  
   </>
  )
}

export default App