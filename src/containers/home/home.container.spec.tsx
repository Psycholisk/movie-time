import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import HomeContainer from './home.container'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handlePlaceholderClick = (): void => {}

jest.mock('axios')

describe('Home Container', () => {
  it('renders slider with correct number of movies', () => {
    const { getByTestId } = render(
      <TestComponentWrapper>
        <HomeContainer />
      </TestComponentWrapper>
    )

    expect(getByTestId('home-banner')).toBeDefined()
    expect(getByTestId('home-my-movies')).toBeDefined()
    expect(getByTestId('home-popular-movies')).toBeDefined()
  })
})
