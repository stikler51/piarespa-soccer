import React, { useEffect } from 'react'
import '../App.css'
import AuthForm from '../components/forms/AuthForm/AuthForm'
import { useNavigate } from 'react-router-dom'
import UserStore from '../stores/UserStore'
import { observer } from 'mobx-react-lite'

function Login() {
  const navigate = useNavigate()
  const { user } = UserStore
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

export default observer(Login)
