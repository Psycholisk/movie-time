import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CenteredContent } from '../../styles/styled-elements'

const HeaderContainer = styled(CenteredContent).attrs({ as: 'header' })`
  height: 100px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    height: 85px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: 75px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    height: 65px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
const SearchButton = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: background-color 0.3s;
  border-radius: 100%;

  img {
    display: block;
    width: 22px;
  }

  @media (pointer: fine) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.09);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    width: 35px;
    height: 35px;
    img {
      width: 18px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    width: 30px;
    height: 30px;
    img {
      width: 16px;
    }
  }
`

const Header = (): JSX.Element => (
  <HeaderContainer>
    <ContentWrapper>
      <Logo to="/" title="MovieTime">
        MovieTime
      </Logo>
      <SearchButton data-testid="search-button">
        <img alt="search" src="../../images/loop-icon.svg" />
      </SearchButton>
    </ContentWrapper>
  </HeaderContainer>
)

export default Header
