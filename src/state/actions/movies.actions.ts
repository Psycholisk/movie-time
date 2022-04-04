import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MovieInterface } from '../../types/movie.types'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (): Promise<MovieInterface[]> => {
  const { data: movies } = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=272edc99e1c3d897c95013477f434620'
  )

  if (movies) {
    const normalizedMovies = movies.results.map((rawMovie: any) => ({
      id: rawMovie.id,
      title: rawMovie.title,
      image: rawMovie.poster_path,
      releaseDate: rawMovie.release_date,
      rating: rawMovie.vote_average,
      language: rawMovie.original_language,
    }))
    return normalizedMovies
  }

  return []
})
