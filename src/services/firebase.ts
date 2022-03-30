import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCDAZbKFxEO5Ki7A4YkzDfQlXgXAoTtsTo',
  authDomain: 'piarespa-soccer.firebaseapp.com',
  projectId: 'piarespa-soccer',
  storageBucket: 'piarespa-soccer.appspot.com',
  messagingSenderId: '1079176239618',
  appId: '1:1079176239618:web:41d8912e0fd607f310e51b',
}

export const FIREBASE_SERVICE = initializeApp(firebaseConfig)
