import React from 'react'
import { render } from '@testing-library/react'

import { TestComponentWrapper } from '../../test-helpers'
import HomeContainer from './home.container'

describe('Home Container', () => {
  it('renders with the right blocks on the page', () => {
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
