import React from 'react'
import { render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import Movie from './movie.component'

describe('Movie Component', () => {
  it('renders required movie attributes', () => {
    const { getByTestId } = render(
      <TestComponentWrapper>
        <Movie id="123" />
      </TestComponentWrapper>
    )

    expect(getByTestId('movie-title')).toBeDefined()
    expect(getByTestId('movie-poster')).toBeDefined()
    expect(getByTestId('movie-imdb-rating')).toBeDefined()
  })
})
