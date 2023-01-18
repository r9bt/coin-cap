import { testApiHandler } from 'next-test-api-route-handler'
import { CoinListMockData } from '@/features/coins'
import handler from './[coin].api'

describe('mock api', () => {
  const coinName = 'bitcoin'
  it('coins-coin', async () => {
    await testApiHandler({
      handler,
      url: `/coins/${coinName}`,
      test: async ({ fetch }) => {
        const response = await fetch()
        await expect(response.json()).resolves.toStrictEqual(
          CoinListMockData.data.find((value) => value.slug === coinName)
        )
      },
    })
  })
})
