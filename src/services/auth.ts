import { getAuth } from 'firebase/auth'
import { FIREBASE_SERVICE } from './firebase'

export const auth = getAuth(FIREBASE_SERVICE)
