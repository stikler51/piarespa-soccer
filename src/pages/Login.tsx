import React, { useEffect, useContext } from 'react'
import '../App.css'
import AuthForm from '../components/forms/AuthForm/AuthForm'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])
  return (
    <div>
      <AuthForm />
    </div>
  )
}

export default Login
