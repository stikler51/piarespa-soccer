import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
