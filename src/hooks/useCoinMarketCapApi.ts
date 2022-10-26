import useSWR from 'swr'
import { coinMarketCapApiAxiosInstance } from '../lib/coinMarketCapApiAxiosInstance'

const fetcher = <T>(url: string): Promise<T> =>
  coinMarketCapApiAxiosInstance.post('/', { url }).then((res) => res.data)
export const useCoinMarketCapApi = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
