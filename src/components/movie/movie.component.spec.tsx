import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import Movie from './movie.component'
import { normalizedMoviesFixture } from '../fixtures/movies.fixture'

describe('Movie Component', () => {
  it('renders required movie attributes', () => {
    const { getByTestId } = render(
      <TestComponentWrapper>
        <Movie {...normalizedMoviesFixture[0]} />
      </TestComponentWrapper>
    )

    expect(getByTestId('movie-title')).toBeDefined()
    expect(getByTestId('movie-poster')).toBeDefined()
    expect(getByTestId('movie-imdb-rating')).toBeDefined()
  })

  it('calls onFavoriteClick() when favorite ribbon is clicked', () => {
    let favoriteId = 0
    const { getByTestId } = render(
      <TestComponentWrapper>
        <Movie
          {...normalizedMoviesFixture[0]}
          onFavoriteClick={(id) => {
            favoriteId = id
          }}
        />
      </TestComponentWrapper>
    )

    fireEvent(
      getByTestId('favorite-ribbon'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(favoriteId).toEqual(normalizedMoviesFixture[0].id)
  })
})
