import { mockApiAxiosInstance } from '@/lib/mockApiAxiosInstance'

export const getCoins = async () => {
  const response = mockApiAxiosInstance.get('/coins')

  return response
}
