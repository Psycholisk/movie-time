import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CenteredContent } from '../../styles/styled-elements'

interface SectionProps {
  title?: string | null
  link?: string
  linkLabel?: string
  testId?: string
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => props.theme.space(3)};
`

const Title = styled.h2`
  font-size: 3rem;
  display: block;

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

const LinkTo = styled(Link)`
  color: ${(p) => p.theme.colors.complementary};
`

const Section = ({ title, children, link, linkLabel, testId }: SectionProps): JSX.Element => (
  <Container data-testid={testId}>
    <ContentWrapper>
      <Header>
        {title && <Title>{title}</Title>}
        {link && linkLabel && (
          <LinkTo to={link} title={linkLabel}>
            {linkLabel}
          </LinkTo>
        )}
      </Header>
      {children}
    </ContentWrapper>
  </Container>
)

Section.defaultProps = {
  title: null,
}

export default Section
