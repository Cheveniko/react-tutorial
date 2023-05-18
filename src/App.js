import React from 'react'
import Navbar from './components/Navbar'
import './assets/styles/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>

  )
}

export default App