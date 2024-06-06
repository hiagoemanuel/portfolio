import { send } from '@emailjs/browser'

const config = {
  serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICEID ?? '',
  templeteID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLETEID ?? '',
  apiKey: process.env.NEXT_PUBLIC_EMAILJS_APIKEY ?? '',
}

export const sendEmailJs = async (params: Record<string, unknown> | undefined) => {
  return await send(config.serviceID, config.templeteID, params, config.apiKey)
}
