import { createSlice } from '@reduxjs/toolkit'
import { MovieInterface } from '../../types/movie.types'

export interface MoviesStore {
  movies: Array<MovieInterface>
  favoriteMovies: Set<MovieInterface>
}

const initialState: MoviesStore = { movies: [], favoriteMovies: new Set() }

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies.concat(action.payload)
    },
    favorMovie: (state, action) => {
      state.favoriteMovies.add(action.payload)
    },
    unfavorMovie: (state, action) => {
      state.favoriteMovies.delete(action.payload)
    },
  },
  extraReducers: {},
})

export const { addMovies, favorMovie, unfavorMovie } = moviesSlice.actions

export default moviesSlice.reducer
