import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Banner, Movie, Section, Slider, Spinner } from '../../components'
import { fetchMovies } from '../../state/actions/movies.actions'
import { toggleFavoriteMovie } from '../../state/reducers/movies.reducer'
import { RootState } from '../../state/store'
import { ListingContainer } from '../../styles/styled-elements'
import { MovieInterface } from '../../types/movie.types'

const HomeContainer = (): JSX.Element => {
  const { entries: movies, isLoading, page, hasMore } = useSelector((state: RootState) => state.movieStore.movies)
  const favorites = useSelector((state: RootState) => state.movieStore.favoriteMovies)
  const dispatch = useDispatch()

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
      dispatch(toggleFavoriteMovie(id))
    },
    [dispatch]
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
      <Banner testId="home-banner" />
      <Section
        title="My Movies"
        link={favoriteMovies.length ? '/my-movies' : undefined}
        linkLabel="View All"
        testId="home-my-movies">
        <Slider movies={favoriteMovies} onPlaceholderClick={handleMyListPlaceholderClick} />
      </Section>
      <Section title="Popular Movies" testId="home-popular-movies">
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
