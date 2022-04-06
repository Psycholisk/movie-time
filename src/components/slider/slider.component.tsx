import React, { useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Slick from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MovieInterface } from '../../types/movie.types'
import Movie from '../movie/movie.component'

const Container = styled.div`
  width: 100%;
  position: relative;
`

const SlickSlider = styled(Slick)`
  overflow: hidden;
  .slick-list {
    margin: 0 -${(p) => p.theme.space(2)};
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

interface SliderProps {
  movies: Array<MovieInterface>
}

const Slider = ({ movies }: SliderProps): JSX.Element => {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false)
  const sliderRef = useRef<Slick | null>(null)
  const theme = useTheme()

  const settings = {
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: false,
    responsive: [
      {
        breakpoint: 1577,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 869,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.tablet,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 563,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    onInit: () => setIsSliderInitialized(true),
    // onInit: () => setIsSliderInitialized(true),
  }

  return (
    <Container>
      <SlickSlider {...settings} ref={sliderRef}>
        {movies.map((movie: MovieInterface) => (
          <Slide key={`${movie.id}-favorite`}>
            <Movie key={movie.id} {...movie} />
          </Slide>
        ))}
      </SlickSlider>
      {isSliderInitialized && (
        <>
          <LeftArrow onClick={() => sliderRef?.current?.slickPrev()} />
          <RightArrow onClick={() => sliderRef?.current?.slickNext()} />
        </>
      )}
    </Container>
  )
}

export default Slider
