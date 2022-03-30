import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import { Container, Box } from '@mui/material'
import Login from './pages/Login'
import UserProvider from './context/userContext'
import Header from './components/layout/Header/Header'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Box component="header">
          <Header />
          <Container maxWidth="lg">
            <nav>
              <Link to="/users">Users</Link>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
            </nav>
          </Container>
        </Box>

        <Container maxWidth="lg" component="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Container>
      </div>
    </UserProvider>
  )
}

export default App
