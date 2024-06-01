import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDKcvtxMeBtV0wku55HXfr5rpJ_3dwp5Xs',
  authDomain: 'portfolio-4b412.firebaseapp.com',
  projectId: 'portfolio-4b412',
  storageBucket: 'portfolio-4b412.appspot.com',
  messagingSenderId: '507635122005',
  appId: '1:507635122005:web:636362a6ab89dc279979dc',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
