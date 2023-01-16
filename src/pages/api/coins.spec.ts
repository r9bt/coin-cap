import { testApiHandler } from 'next-test-api-route-handler'
import mockCoinsList from '@/mock/response/mockCoins.response.json'
import { handler } from '@/pages/api/coins.api'

describe('mock api', () => {
  it('mock data', async () => {
    await testApiHandler({
      handler,
      url: '/coins',
      test: async ({ fetch }) => {
        const response = await fetch()
        await expect(response.json()).resolves.toStrictEqual(mockCoinsList)
      },
    })
  })
})
