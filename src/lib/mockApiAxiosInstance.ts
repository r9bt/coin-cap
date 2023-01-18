import axios from 'axios'
import { assertIsDefined } from '@/utils/assertIsDefined'

const NEXT_PUBLIC_MOCK_API_URL = process.env.NEXT_PUBLIC_MOCK_API_URL
assertIsDefined(NEXT_PUBLIC_MOCK_API_URL)
export const mockApiAxiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_MOCK_API_URL,
})
