import React from 'react'

import { Banner, Movie, Section } from '../components'

const HomeContainer = (): JSX.Element => (
  <>
    <Banner />
    <Section title="My Movies">
      <Movie />
    </Section>
  </>
)

export default HomeContainer
