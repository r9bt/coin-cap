import axios from 'axios'

export const coinMarketCapApiAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LAMBDA_API_URL,
})
