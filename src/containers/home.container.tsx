import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Banner, Movie, Section } from '../components'
import { fetchMovies } from '../state/actions/movies.actions'
import { RootState } from '../state/store'
import { ListingContainer } from '../styles/styled-elements'
import { MovieInterface } from '../types/movie.types'

const HomeContainer = (): JSX.Element => {
  const movies = useSelector((state: RootState) => state.movieStore.movies)
  const dispatch = useDispatch()

  const [favorites, setFavorites] = useState<{ [key: MovieInterface['id']]: boolean }>({})

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  const handleFavorite = useCallback(
    (id: MovieInterface['id']) => {
      setFavorites({ ...favorites, [id]: !favorites[id] })
    },
    [favorites]
  )

  return (
    <>
      <Banner />
      <Section title="Popular Movies">
        <ListingContainer>
          {movies.map((movie: MovieInterface) => (
            <Movie key={movie.id} isFavorite={!!favorites[movie.id]} onFavoriteClick={handleFavorite} {...movie} />
          ))}
        </ListingContainer>
      </Section>
    </>
  )
}

export default HomeContainer
