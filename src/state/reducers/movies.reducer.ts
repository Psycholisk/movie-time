import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit'
import { MovieInterface } from '../../types/movie.types'
import { PaginatedList } from '../../types/pagination.types'
import { fetchMovies } from '../actions/movies.actions'

export interface MoviesStore {
  movies: PaginatedList<MovieInterface>
  favoriteMovies: { [key: MovieInterface['id']]: boolean }
}
const initialState: MoviesStore = {
  movies: { entries: [], page: 1, hasMore: false, isLoading: true },
  favoriteMovies: {},
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavoriteMovie: (state, action) => {
      state.favoriteMovies = {
        ...state.favoriteMovies,
        [action.payload]: !state.favoriteMovies[action.payload],
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<MoviesStore>) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const previousMovies = action.payload.page === 1 ? [] : state.movies.entries
      state.movies = {
        ...state.movies,
        entries: [...previousMovies, ...action.payload.entries],
        isLoading: false,
        page: action.payload.page,
        hasMore: action.payload.hasMore,
      }
    })
    builder.addCase(fetchMovies.pending, (state) => {
      state.movies.isLoading = true
    })
    builder.addCase(fetchMovies.rejected, (state) => {
      // Capture error and report it
      state.movies.isLoading = false
    })
  },
})

export const { toggleFavoriteMovie } = moviesSlice.actions

export default moviesSlice.reducer
