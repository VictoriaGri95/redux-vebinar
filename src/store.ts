import {configureStore} from '@reduxjs/toolkit'


type State = {
  counter: number
}

export type IncrementAction = {
  type: 'increment'
}

export type DecrementAction = {
  type: 'decrement'
}

export type Action = IncrementAction | DecrementAction

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const initialState: State = {
  counter: 0,
}

export const store = configureStore({
  reducer: reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch