import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { MovieInterface } from '../../types/movie.types'
import { fetchMovies } from '../actions/movies.actions'

export interface MoviesStore {
  movies: Array<MovieInterface>
  favoriteMovies: Set<MovieInterface>
}

const initialState: MoviesStore = { movies: [], favoriteMovies: new Set() }

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    favorMovie: (state, action) => {
      state.favoriteMovies.add(action.payload)
    },
    unfavorMovie: (state, action) => {
      state.favoriteMovies.delete(action.payload)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<MoviesStore>) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // eslint-disable-next-line prefer-spread
      state.movies.push.apply(state.movies, action.payload)
    })
  },
})

export const { favorMovie, unfavorMovie } = moviesSlice.actions

export default moviesSlice.reducer
