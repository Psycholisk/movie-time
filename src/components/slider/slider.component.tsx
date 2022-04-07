import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Slick from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MovieInterface } from '../../types/movie.types'
import Movie from '../movie/movie.component'

interface SliderProps {
  movies: Array<MovieInterface>
  onPlaceholderClick: () => void
}

const Container = styled.div`
  width: 100%;
  position: relative;
`

const SlickSlider = styled(Slick)`
  overflow: hidden;
  .slick-list {
    margin: 0 -${(p) => p.theme.space(2)};
  }
  .slick-track {
    margin-left: 0;
  }
`

const Slide = styled.div`
  width: 200px;
  padding: 0 ${(p) => p.theme.space(2)};
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 50px;
  background: ${(p) => p.theme.colors.complementary};
  cursor: pointer;
  border-radius: 8px;
  transition: opacity 0.4s;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-bottom: 17px solid ${(p) => p.theme.colors.negativeSpace};
  }

  @media (pointer: fine) {
    &:hover {
      opacity: 0.6;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    width: 30px;
    height: 40px;
    &::before {
      border-bottom: 14px solid ${(p) => p.theme.colors.negativeSpace};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`

const LeftArrow = styled(Arrow)`
  left: -25px;
  &::before {
    border-right: 17px solid transparent;
    transform: rotate(45deg) translate(-45%, -20%);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    left: -15px;
    &::before {
      border-right: 14px solid transparent;
    }
  }
`

const RightArrow = styled(Arrow)`
  right: -25px;
  &::before {
    border-left: 17px solid transparent;
    transform: rotate(-45deg) translate(-20%, -90%);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    right: -15px;
    &::before {
      border-left: 14px solid transparent;
    }
  }
`

const PlaceholderSlide = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  position: relative;
  cursor: pointer;
  background: ${(p) => p.theme.colors.negativeSpaceContrast};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${(p) => p.theme.colors.complementary};
    border-radius: 3px;
  }

  &::before {
    width: 40px;
    height: 2px;
    top: calc(50% - 1px);
    left: calc(50% - 20px);
  }
  &::after {
    height: 40px;
    width: 2px;
    left: calc(50% - 1px);
    top: calc(50% - 20px);
  }
`

const PlaceholderText = styled.span`
  color: ${(p) => p.theme.colors.primaryText};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: 1.8rem;
  text-transform: uppercase;
  position: absolute;
  top: calc(50% + 60px);
  left: 50%;
  transform: translateX(-50%);
`

const Slider = ({ movies, onPlaceholderClick }: SliderProps): JSX.Element => {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false)
  const sliderRef = useRef<Slick | null>(null)

  const settings = {
    accessibility: true,
    infinite: movies.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: false,
    onReInit: () => setIsSliderInitialized(movies.length > 5),
    responsive: [
      {
        breakpoint: 1577,
        settings: {
          infinite: movies.length > 4,
          slidesToShow: 4,
          slidesToScroll: 4,
          onReInit: () => setIsSliderInitialized(movies.length > 4),
        },
      },
      {
        breakpoint: 1175,
        settings: {
          infinite: movies.length > 3,
          slidesToShow: 3,
          slidesToScroll: 3,
          onReInit: () => setIsSliderInitialized(movies.length > 3),
        },
      },
      {
        breakpoint: 869,

        settings: {
          infinite: movies.length > 2,
          slidesToShow: 2,
          slidesToScroll: 2,
          onReInit: () => setIsSliderInitialized(movies.length > 2),
        },
      },
      {
        breakpoint: 563,
        settings: {
          infinite: movies.length > 1,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Container>
      <SlickSlider {...settings} ref={sliderRef}>
        {movies.length ? (
          movies.map((movie: MovieInterface) => (
            <Slide key={`${movie.id}-favorite`}>
              <Movie key={movie.id} {...movie} />
            </Slide>
          ))
        ) : (
          <Slide>
            <PlaceholderSlide onClick={onPlaceholderClick} data-testid="placeholder-slide">
              <PlaceholderText>Add to list</PlaceholderText>
            </PlaceholderSlide>
          </Slide>
        )}
      </SlickSlider>
      {isSliderInitialized && movies.length && (
        <>
          <LeftArrow onClick={() => sliderRef?.current?.slickPrev()} />
          <RightArrow onClick={() => sliderRef?.current?.slickNext()} />
        </>
      )}
    </Container>
  )
}

export default Slider
