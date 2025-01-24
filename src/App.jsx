import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import './i18n';

function App() {

  return (<>
    <div className='container-fluid'>
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </div></>
  )
}

export default App
