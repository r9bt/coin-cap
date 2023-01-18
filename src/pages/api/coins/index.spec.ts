import { testApiHandler } from 'next-test-api-route-handler'
import { CoinListMockData } from '@/features/coins'
import handler from './index.api'

describe('mock api', () => {
  it('coins?page=1', async () => {
    await testApiHandler({
      handler,
      url: '/coins?page=1',
      test: async ({ fetch }) => {
        const response = await fetch()
        await expect(response.json()).resolves.toStrictEqual(
          CoinListMockData.data.slice(1 - 1, 100)
        )
      },
    })
  }),
    it('coins?page=2', async () => {
      await testApiHandler({
        handler,
        url: '/coins?page=2',
        test: async ({ fetch }) => {
          const response = await fetch()
          await expect(response.json()).resolves.toStrictEqual(
            CoinListMockData.data.slice(100 - 1, 200)
          )
        },
      })
    })
})
