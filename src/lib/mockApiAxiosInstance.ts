import axios from 'axios'
import { assertIsDefined } from '@/utils/assertIsDefined'

const MOCK_API_URL = process.env.MOCK_API_URL
assertIsDefined(MOCK_API_URL)
export const mockApiAxiosInstance = axios.create({
  baseURL: MOCK_API_URL,
})
