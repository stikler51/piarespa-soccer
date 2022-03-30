/* eslint-disable no-unused-vars */
import React, { createContext, Dispatch, useEffect, SetStateAction, useState } from 'react'
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../services/auth'

export type UserActions = {
  LOGIN: (payload: UserPayload) => void
  SIGNIN: (payload: UserPayload) => void
  LOGOUT: () => void
}

interface UserPayload {
  email: string
  password: string
}

interface IUserContext extends UserActions {
  user: User | null
  setUser?: Dispatch<SetStateAction<User | null>>
  error?: any
}

const userActions: UserActions = {
  LOGIN: (payload) => signInWithEmailAndPassword(auth, payload.email, payload.password),
  SIGNIN: (payload) => createUserWithEmailAndPassword(auth, payload.email, payload.password),
  LOGOUT: () => signOut(auth),
}

export const UserContext = createContext<IUserContext>({ ...userActions, user: null })

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // sessionStorage.setItem('mini-paint-loggedIn', 'true')
        setUser(user)
        return
      }
      setUser(null)
      // sessionStorage.setItem('mini-paint-loggedIn', 'false')
    })
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ...userActions,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
