import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import Slider from './slider.component'
import { normalizedMoviesFixture } from '../fixtures/movies.fixture'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handlePlaceholderClick = (): void => {}

describe('Slider Component', () => {
  it('renders slider with correct number of movies', () => {
    const { getAllByTestId } = render(
      <TestComponentWrapper>
        <Slider movies={normalizedMoviesFixture.slice(0, 5)} onPlaceholderClick={handlePlaceholderClick} />
      </TestComponentWrapper>
    )

    expect(getAllByTestId('movie-element').length).toEqual(5)
  })

  it('renders extra slides when slides count is larger than 5', () => {
    const { getAllByTestId, queryByTestId } = render(
      <TestComponentWrapper>
        <Slider movies={normalizedMoviesFixture} onPlaceholderClick={handlePlaceholderClick} />
      </TestComponentWrapper>
    )

    // Slick doubles the number of slides and adds 5
    expect(getAllByTestId('movie-element').length).toEqual(normalizedMoviesFixture.length * 2 + 5)
    expect(queryByTestId('placeholder-slide')).toBeNull()
  })

  it('renders default element when 0 movies are provided', () => {
    const { getByTestId, queryAllByTestId } = render(
      <TestComponentWrapper>
        <Slider movies={[]} onPlaceholderClick={handlePlaceholderClick} />
      </TestComponentWrapper>
    )

    expect(queryAllByTestId('movie-element').length).toEqual(0)
    expect(getByTestId('placeholder-slide')).toBeDefined()
  })

  it('calls onPlaceholderClick when placeholder is clicked', () => {
    let placeholder = ''
    const { getByTestId } = render(
      <TestComponentWrapper>
        <Slider
          movies={[]}
          onPlaceholderClick={() => {
            placeholder = 'placed'
          }}
        />
      </TestComponentWrapper>
    )

    fireEvent(
      getByTestId('placeholder-slide'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(placeholder).toEqual('placed')
  })
})
