/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { makeAutoObservable } from 'mobx'
import { auth } from '../services/auth'
import { saveUser } from '../services/db'

type UserPayload = {
  email: string
  password: string
}

type IUserStore = {
  user: any
  error: any
  login: (payload: UserPayload) => void
  register: (payload: UserPayload) => void
  logout: () => void
}

const UserStore: IUserStore = makeAutoObservable({
  user: null,
  error: null,
  login: ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        UserStore.user = user
        UserStore.error = null
      })
      .catch((error) => {
        UserStore.error = error
      })
  },
  logout: () => {
    signOut(auth)
      .then(() => {
        UserStore.user = null
        UserStore.error = null
      })
      .catch((error) => {
        UserStore.error = error
      })
  },
  register: ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        UserStore.user = user
        UserStore.error = null
        return user
      })
      .then((user) => {
        saveUser(user.uid, user.email)
      })
      .catch((error) => {
        UserStore.error = error
      })
  },
})

export default UserStore
