import { doc, getDoc } from 'firebase/firestore'
import { db } from './'

export async function getDocument<T>(
  collection: 'landing-page' | 'single-page' | 'core-info',
  document: string,
): Promise<T> {
  const docRef = doc(db, collection, document)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) throw new Error('getDocument(): document was not found')

  return docSnap.data() as T
}
