import { setDoc, doc, getFirestore } from 'firebase/firestore'
// import { FIREBASE_SERVICE } from './firebase'

export const db = getFirestore()

export const saveUser = async (uid: string, email: string | null) => {
  await setDoc(doc(db, 'users', uid), {
    email: email,
  })
}
