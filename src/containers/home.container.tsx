import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Banner, Movie, Section, Spinner } from '../components'
import { fetchMovies } from '../state/actions/movies.actions'
import { RootState } from '../state/store'
import { ListingContainer } from '../styles/styled-elements'
import { MovieInterface } from '../types/movie.types'

const HomeContainer = (): JSX.Element => {
  const { entries: movies, isLoading, page, hasMore } = useSelector((state: RootState) => state.movieStore.movies)
  const dispatch = useDispatch()

  const [favorites, setFavorites] = useState<{ [key: MovieInterface['id']]: boolean }>({})

  const observer = useRef<IntersectionObserver>()
  const lastMovieRef = useCallback(
    (element) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          dispatch(fetchMovies(page + 1))
        }
      })
      if (element) observer?.current?.observe(element)
    },
    [dispatch, isLoading]
  )

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
          {movies.map((movie: MovieInterface, index: number) => (
            <Movie
              elementRef={index + 1 === movies.length ? lastMovieRef : undefined}
              key={movie.id}
              isFavorite={!!favorites[movie.id]}
              onFavoriteClick={handleFavorite}
              {...movie}
            />
          ))}
        </ListingContainer>
        <Spinner />
      </Section>
    </>
  )
}

export default HomeContainer
