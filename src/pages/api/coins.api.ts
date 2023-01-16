import { NextApiRequest, NextApiResponse } from 'next'
import mockCoinsList from '@/mock/response/mockCoins.response.json'

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.send(mockCoinsList)
}
