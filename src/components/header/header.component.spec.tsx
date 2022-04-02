import React from 'react'
import { render } from '@testing-library/react'

import Header from './header.component'
import { TestComponentWrapper } from '../../test-helpers'

describe('Header Component', () => {
  it('renders header with the right elements', () => {
    const { getByTestId, getByText } = render(
      <TestComponentWrapper>
        <Header />
      </TestComponentWrapper>
    )

    expect(getByText('MovieTime')).toBeDefined()
    expect(getByTestId('search-button')).toBeDefined()
  })
})
