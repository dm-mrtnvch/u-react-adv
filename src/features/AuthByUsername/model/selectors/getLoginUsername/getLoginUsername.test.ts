import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return correct value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'blabla',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('blabla')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
