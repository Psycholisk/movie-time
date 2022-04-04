import React from 'react'
import { render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import Movie from './movie.component'

const image =
  'https://m.media-amazon.com/images/M/MV5BM2QzMWM5OTgtZDE1MC00ZmMyLWIyODItMmQ4NjNlZGRjYTUzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg'

describe('Movie Component', () => {
  it('renders required movie attributes', () => {
    const { getByTestId } = render(
      <TestComponentWrapper>
        <Movie id={123} title="Spider-Man" image={image} language="en" rating="6.8" releaseDate="2022-06-01" />
      </TestComponentWrapper>
    )

    expect(getByTestId('movie-title')).toBeDefined()
    expect(getByTestId('movie-poster')).toBeDefined()
    expect(getByTestId('movie-imdb-rating')).toBeDefined()
  })
})
