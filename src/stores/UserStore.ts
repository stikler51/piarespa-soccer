import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { makeAutoObservable } from 'mobx'
import { auth } from '../services/auth'

interface UserPayload {
  email: string
  password: string
}
interface IUserStore {
  user: any
  error: any
  // eslint-disable-next-line no-unused-vars
  login: (payload: UserPayload) => void
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
})

export default UserStore
