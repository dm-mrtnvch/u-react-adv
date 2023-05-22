import { CounterSchema } from 'entities/Counter'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('counterActions.increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(
      counterReducer(state, counterActions.increment()),
    )
      .toEqual({ value: 11 })
  })

  test('counterActions.decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(
      counterReducer(state, counterActions.decrement()),
    )
      .toEqual({ value: 9 })
  })

  test('emptyState', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    )
      .toEqual({ value: 1 })
  })
})
