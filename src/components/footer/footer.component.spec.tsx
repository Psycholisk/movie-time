import React from 'react'
import { render } from '@testing-library/react'

import Footer from './footer.component'
import { TestComponentWrapper } from '../../test-helpers'

describe('Footer Component', () => {
  it('renders footer with the right elements and year', () => {
    const { getByText } = render(
      <TestComponentWrapper>
        <Footer />
      </TestComponentWrapper>
    )

    expect(getByText('MovieTime')).toBeDefined()
    expect(getByText(`Copyright © ${new Date().getFullYear()} MovieTime. All Rights Reserved`)).toBeDefined()
  })
})
