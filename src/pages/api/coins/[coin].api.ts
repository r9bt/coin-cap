import { NextApiHandler } from 'next'
import { CoinListMockData } from '@/features/coins'

const handler: NextApiHandler = async (req, res) => {
  const coinNamePath = req.url?.match(/[^/]*$/)?.[0]

  const result = CoinListMockData.data.find((value) => value.slug === coinNamePath)
  if (result) {
    res.send(result)
  } else {
    res.status(500).send({ msg: 'nothing' })
  }
}

export default handler
