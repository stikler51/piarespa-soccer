import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import usePrivateRoute from '../hooks/usePrivateRoute'

function Users() {
  usePrivateRoute()
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Users</p>
    </>
  )
}

export default Users
