import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '.'

export async function getImage(imageRef: string) {
  const pathReference = ref(storage, imageRef)
  const image = await getDownloadURL(pathReference)
  return image
}
