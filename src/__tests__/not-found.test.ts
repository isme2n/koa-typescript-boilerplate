import { apiHelper } from './api-helper'
import { throws } from 'smid'

describe('nonexisting routes', () => {
  it('returns 404 with the path and method info', async () => {
    const api = await apiHelper()
    const { response } = await api.client.get('/nonexisting').catch(err => {
      return err
    })
    expect(response.status).toBe(404)
    expect(response.data.message).toMatch(/GET \/nonexisting/)
  })
})
