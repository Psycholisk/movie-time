import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/movies.slice'

const store = configureStore({
  reducer: {
    movieStore: moviesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
