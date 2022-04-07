import React from 'react'
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { CenteredContent } from '../../styles/styled-elements'

const BodyPadding = createGlobalStyle`
body{
    padding-bottom: 100px;
  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    padding-bottom: 85px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-bottom: 75px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding-bottom: 85px;
  }
}
`

const FooterContainer = styled(CenteredContent).attrs({ as: 'footer' })`
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: ${(p) => p.theme.colors.negativeSpaceContrast};
  position: absolute;
  bottom: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    height: 85px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: 75px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    height: 85px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`

const Logo = styled(Link)`
  font-size: 3.2rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};

  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    font-size: 2.7rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 2.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    height: 2.3rem;
  }
`

const Copyrights = styled.div`
  font-size: 1.4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 1.2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    margin-top: ${(p) => p.theme.space(1)};
  }
`

const Footer = (): JSX.Element => (
  <FooterContainer>
    <ContentWrapper>
      <Logo to="/" title="MovieTime">
        MovieTime
      </Logo>
      <Copyrights>Copyright © {new Date().getFullYear()} MovieTime. All Rights Reserved</Copyrights>
    </ContentWrapper>
    <BodyPadding />
  </FooterContainer>
)

export default Footer
