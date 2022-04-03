import React from 'react'
import styled from 'styled-components'

import { CenteredContent } from '../../styles/styled-elements'

const Container = styled(CenteredContent)`
  padding-top: ${(props) => props.theme.space(12.5)};
  padding-bottom: ${(props) => props.theme.space(8)};
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    padding-top: ${(props) => props.theme.space(10)};
    padding-bottom: ${(props) => props.theme.space(6)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-top: ${(props) => props.theme.space(8)};
    padding-bottom: ${(props) => props.theme.space(5)};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    padding-top: ${(props) => props.theme.space(6)};
    padding-bottom: ${(props) => props.theme.space(4)};
  }
`

const Pattern = styled.div`
  width: 40vw;
  height: 40vw;
  min-width: 285px;
  min-height: 285px;
  max-width: 800px;
  max-height: 800px;
  position: absolute;
  right: 0;
  top: calc(50% + 30px);
  transform: translateY(-50%);
  overflow: hidden;
  &::before {
    content: '';
    width: 70%;
    height: 70%;
    position: absolute;
    right: 0;
    top: 15%;
    transform: translateX(52%) rotate(45deg);
    background-image: radial-gradient(${(props) => props.theme.colors.complementary} 4%, transparent 5%),
      radial-gradient(${(props) => props.theme.colors.complementary} 4%, transparent 5%);
    background-size: 30px 30px;
    background-position: 0 0, 30px 30px;
    background-repeat: repeat;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
`

const MainTitle = styled.h1`
  display: block;
  font-size: 7rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  width: calc(100% - 100px);
  max-width: 1000px;

  @media (max-width: ${(props) => props.theme.breakpoints.largeScreen}px) {
    font-size: 6rem;
    max-width: 800px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    font-size: 5.5rem;
    max-width: 650px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    font-size: 5rem;
    max-width: 550px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 4rem;
    max-width: 450px;
    width: calc(100% - 50px);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 3.3rem;
    max-width: 360px;
    width: 100%;
  }
`

const Seperator = styled.div`
  width: 100px;
  height: 2px;
  background: ${(props) => props.theme.colors.complementary};
  margin-top: ${(props) => props.theme.space(3)};
  border-radius: 3px;
`

const Subtitle = styled.p`
  font-size: 2.4rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.secondaryText};
  margin-top: ${(props) => props.theme.space(3)};

  @media (max-width: ${(props) => props.theme.breakpoints.largeScreen}px) {
    font-size: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mediumScreen}px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    font-size: 1.4rem;
  }
`

const Banner = (): JSX.Element => (
  <Container>
    <ContentWrapper>
      <MainTitle>The easiest way to find movies you like.</MainTitle>
      <Seperator />
      <Subtitle>&quot;No good movie is too long and no bad movie is short enough&quot;</Subtitle>
      <Pattern />
    </ContentWrapper>
  </Container>
)

export default Banner
