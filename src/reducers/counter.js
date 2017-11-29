import { INCREMENT_COUNT, DECREMENT_COUNT } from '@/actions/counter'

const initialState = {
  count: 0
}

export default function counter (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + 1
      }

    case DECREMENT_COUNT:
      return {
        count: state.count - 1
      }

    default:
      return state
  }
}
