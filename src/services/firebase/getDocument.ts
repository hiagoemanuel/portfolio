import { doc, getDoc } from 'firebase/firestore'
import { db } from './'

export async function getDocument<T>(
  collection: 'landing-page' | 'single-page' | 'core-info',
  document: string,
): Promise<T | undefined> {
  const docRef = doc(db, collection, document)
  const docSnap = await getDoc(docRef)

  return docSnap.data() as T
}
