import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { MovieInterface } from '../../types/movie.types'
import { PaginatedList } from '../../types/pagination.types'

const { CancelToken } = axios
const source = CancelToken.source()

export interface RawMovie {
  id: number
  title: string
  poster_path?: string
  release_date: string
  vote_average: string
  original_language: string
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (page?: number): Promise<Omit<PaginatedList<MovieInterface>, 'isLoading'>> => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page || 1}`,
      { cancelToken: source.token }
    )
    let normalizedMovies = []
    if (data?.results) {
      normalizedMovies = data.results.map((rawMovie: RawMovie) => ({
        id: rawMovie.id,
        title: rawMovie.title,
        image: rawMovie.poster_path,
        releaseDate: rawMovie.release_date,
        rating: rawMovie.vote_average,
        language: rawMovie.original_language,
      }))
    }
    return {
      page: data?.page || 1,
      entries: normalizedMovies,
      hasMore: data?.total_pages && data?.total_pages > data?.page,
    }
  }
)
