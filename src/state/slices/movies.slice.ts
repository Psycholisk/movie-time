import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../types/movie.types'

export interface MoviesStore {
  movies: Set<Movie>
  favoriteMovies: Set<Movie>
}

const initialState: MoviesStore = { movies: new Set(), favoriteMovies: new Set() }

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      action.payload.forEach((movie: Movie) => state.movies.add(movie))
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
