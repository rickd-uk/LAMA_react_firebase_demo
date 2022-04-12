import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'lamadev-firebase-tutorial.firebaseapp.com',
	projectId: 'lamadev-firebase-tutorial',
	storageBucket: 'lamadev-firebase-tutorial.appspot.com',
	messagingSenderId: '16469531332',
	appId: '1:16469531332:web:5176cd6277d2e87ddf0791',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
