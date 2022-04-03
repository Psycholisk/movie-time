import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { CenteredContent } from '../../styles/styled-elements'

interface SectionProps {
  title?: string | null
  children: ReactNode
}

const Container = styled(CenteredContent)`
  padding-top: ${(props) => props.theme.space(8)};
  padding-bottom: ${(props) => props.theme.space(7)};

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    padding-top: ${(props) => props.theme.space(6)};
    padding-bottom: ${(props) => props.theme.space(5)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-top: ${(props) => props.theme.space(5)};
    padding-bottom: ${(props) => props.theme.space(4)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding-top: ${(props) => props.theme.space(4)};
    padding-bottom: ${(props) => props.theme.space(3)};
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
`

const Title = styled.h2`
  font-size: 3rem;
  display: block;
  padding-bottom: ${(props) => props.theme.space(3)};

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    font-size: 2.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 2.4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 2.2rem;
  }
`

const Section = ({ title, children }: SectionProps): JSX.Element => (
  <Container>
    <ContentWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ContentWrapper>
  </Container>
)

Section.defaultProps = {
  title: null,
}

export default Section
