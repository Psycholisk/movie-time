import React from 'react'
import { render } from '@testing-library/react'

import Section from './section.component'
import { TestComponentWrapper } from '../../test-helpers'

describe('Section Component', () => {
  it('renders section with a title and children', () => {
    const { getByTestId, getByText } = render(
      <TestComponentWrapper>
        <Section title="hello world">
          <div data-testid="section-test">123</div>
        </Section>
      </TestComponentWrapper>
    )

    expect(getByText('hello world')).toBeDefined()
    expect(getByTestId('section-test')).toBeDefined()
  })

  it('displays link when both label and link are provided', () => {
    const { getByText } = render(
      <TestComponentWrapper>
        <Section title="hello world" link="/my-movies" linkLabel="My Link">
          hello children
        </Section>
      </TestComponentWrapper>
    )

    expect(getByText('My Link')).toBeDefined()
  })

  it('does not displays link when any of label or link are not provided', () => {
    const { queryByText } = render(
      <TestComponentWrapper>
        <Section title="hello world" link="/my-movies">
          hello children
        </Section>
      </TestComponentWrapper>
    )

    expect(queryByText('My Link')).toBeNull()
  })
})
