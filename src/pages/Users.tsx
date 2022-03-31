import React, { useEffect } from 'react'
import logo from '../logo.svg'
import '../App.css'
import usePrivateRoute from '../hooks/usePrivateRoute'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/db'

function Users() {
  usePrivateRoute()

  useEffect(() => {
    getDocs(collection(db, 'users')).then((snapshot) => {
      console.log(snapshot)
      snapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data())
      })
    })
  }, [])

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Users</p>
    </>
  )
}

export default Users
