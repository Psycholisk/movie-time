import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Movie, Section } from '../components'
import { RootState } from '../state/store'
import { ListingContainer } from '../styles/styled-elements'
import { MovieInterface } from '../types/movie.types'

const MyMoviesContainer = (): JSX.Element => {
  const { movies, favoriteMovies } = useSelector((state: RootState) => state.movieStore)

  const finalMovies = useMemo(
    () => movies.entries.filter((movie) => !!favoriteMovies[movie.id]),
    [movies.entries, favoriteMovies]
  )

  return (
    <Section title="My Movies">
      <ListingContainer>
        {finalMovies.map((movie: MovieInterface) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </ListingContainer>
    </Section>
  )
}

export default MyMoviesContainer
