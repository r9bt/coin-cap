import { NextApiHandler } from 'next'
import { CoinListMockData } from '@/features/coins'

const handler: NextApiHandler = async (req, res) => {
  const { page } = req.query
  const pageNumber = Number(page)
  const start = pageNumber === 1 ? 0 : (pageNumber - 1) * 100 - 1
  const end = pageNumber * 100
  const filteredList = CoinListMockData.data.slice(start, end)

  await new Promise((resolve) => setTimeout(resolve, 1000))
  res.send(filteredList)
}

export default handler
