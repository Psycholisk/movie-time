import React from 'react'
import styled from 'styled-components'
import { MovieInterface } from '../../types/movie.types'

// Aspect ratio 1.48 | 250x370
const Container = styled.article`
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  height: 370px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`

const ImageFrame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const CoverImage = styled.img`
  display: block;
  height: 100%;
  width: auto;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  z-index: 1;
  display: grid;
  grid-template-columns: ${(p) => p.theme.space(2)} 1fr 1fr ${(p) => p.theme.space(2)};
  grid-template-rows: ${(p) => p.theme.space(2)} auto 1fr auto ${(p) => p.theme.space(1)} auto ${(p) =>
      p.theme.space(1)} auto ${(p) => p.theme.space(2)};
  transition: opacity 0.5s;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 19%, black);
  }

  @media (pointer: fine) {
    &:hover {
      opacity: 0;
    }
  }
`

const Title = styled.h1`
  font-size: 2rem;
  z-index: 1;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
`

const LanguageTab = styled.span`
  background-color: ${(p) => p.theme.colors.complementary};
  border-radius: 16px;
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.negativeSpace};
  padding: 3px ${(p) => p.theme.space(1)} 3px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-right: auto;
  z-index: 1;
  text-transform: uppercase;
`

const Attributes = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  z-index: 1;
  display: flex;
`

const IconAttribute = styled.span`
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.dimmedWhite};
  position: relative;
  display: flex;
  align-items: center;

  &:nth-of-type(n + 2) {
    margin-left: ${(p) => p.theme.space(1.5)};
  }
  img {
    width: 13px;
    margin-right: ${(p) => p.theme.space(1)};
  }
`

const FavoriteRibon = styled.div<{ isActive: boolean }>`
  --bgcolor: ${(p) => (p.isActive ? p.theme.colors.complementary : 'rgba(20, 24, 35, 0.6)')};
  width: 30px;
  height: ${(p) => (p.isActive ? '50px' : '35px')};
  position: absolute;
  top: 0;
  right: 4px;
  background: var(--bgcolor);
  transition: height 0.6s, background 0.4s;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -13px;
    border-bottom: 13px solid transparent;
    transition: border-color 0.4s;
  }
  &::before {
    left: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid var(--bgcolor);
  }
  &::after {
    right: 0;
    border-right: 15px solid transparent;
    border-left: 15px solid var(--bgcolor);
  }
  ${(p) =>
    !p.isActive
      ? `
  @media (pointer: fine) {
    &:hover {
      background: rgba(214, 164, 25, 0.6);

      &::before {
        border-right: 15px solid rgba(214, 164, 25, 0.6);
      }
      &::after {
        border-left: 15px solid rgba(214, 164, 25, 0.6);
      }
    }
  }
  `
      : ''};
`

const FavoriteIcon = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: calc(50% - 6px);
  left: calc(50% - 6px);
  width: 12px;
  height: 12px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(p) => p.theme.colors.dimmedWhite};
  }
  &::before {
    left: 0;
    top: calc(50% - 1px);
    height: 2px;
    width: 100%;
  }
  &::after {
    top: 0;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    ${(p) => (p.isActive ? 'display: none;' : '')}
  }
`

interface MovieProps extends MovieInterface {
  isFavorite?: boolean
  onFavoriteClick?: (id: MovieInterface['id']) => void
}

const Movie = ({
  id,
  title,
  language,
  rating,
  releaseDate,
  image,
  isFavorite,
  onFavoriteClick,
}: MovieProps): JSX.Element => (
  <Container>
    <ImageFrame>
      <CoverImage src={`https://image.tmdb.org/t/p/w500/${image}`} data-testId="movie-poster" />
    </ImageFrame>
    <Content>
      {language && <LanguageTab>{language}</LanguageTab>}
      <Attributes>
        {releaseDate && (
          <IconAttribute>
            <img alt="Release Date" src="../../images/calendar-icon-2.svg" />
            {releaseDate}
          </IconAttribute>
        )}
        {rating && (
          <IconAttribute data-testId="movie-imdb-rating">
            <img alt="Hourglass" src="../../images/star-icon.svg" />
            {rating}
          </IconAttribute>
        )}
      </Attributes>
      <Title data-testId="movie-title">{title}</Title>
    </Content>
    {Boolean(onFavoriteClick) && (
      <FavoriteRibon isActive={!!isFavorite} onClick={() => onFavoriteClick!(id)}>
        <FavoriteIcon isActive={!!isFavorite} />
      </FavoriteRibon>
    )}
  </Container>
)

Movie.defaultProps = {
  isFavorite: false,
  onFavoriteClick: undefined,
}

export default Movie
