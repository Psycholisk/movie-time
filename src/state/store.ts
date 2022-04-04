import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducers/movies.reducer'

const store = configureStore({
  reducer: {
    movieStore: moviesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
