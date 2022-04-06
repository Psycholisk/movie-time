import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Banner, Movie, Section, Slider, Spinner } from '../components'
import { fetchMovies } from '../state/actions/movies.actions'
import { RootState } from '../state/store'
import { ListingContainer } from '../styles/styled-elements'
import { MovieInterface } from '../types/movie.types'

const HomeContainer = (): JSX.Element => {
  const { entries: movies, isLoading, page, hasMore } = useSelector((state: RootState) => state.movieStore.movies)
  const dispatch = useDispatch()

  const [favorites, setFavorites] = useState<{ [key: MovieInterface['id']]: boolean }>({})

  const popularMoviesRef = useRef<HTMLDivElement>(null)

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

  const handleMyListPlaceholderClick = (): void => {
    if (popularMoviesRef?.current) {
      const scrollValue = popularMoviesRef.current.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ behavior: 'smooth', top: scrollValue })
    }
  }
  const favoriteMovies = useMemo(() => movies.filter((movie) => !!favorites[movie.id]), [favorites])
  return (
    <>
      <Banner />
      <Section title="My Movies" link={favoriteMovies.length ? '/my-movies' : undefined} linkLabel="View All">
        <Slider movies={favoriteMovies} onPlaceholderClick={handleMyListPlaceholderClick} />
      </Section>
      <Section title="Popular Movies">
        <ListingContainer ref={popularMoviesRef}>
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
        {isLoading && <Spinner />}
      </Section>
    </>
  )
}

export default HomeContainer
