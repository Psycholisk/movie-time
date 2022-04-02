import { DefaultTheme } from 'styled-components'

const SPACE_UNIT = 8

export const defaultTheme: DefaultTheme = {
  fonts: {
    primary: 'Roboto',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primaryText: 'white',
    secondaryText: '#737782',
    dimmedWhite: '#5F636D',
    negativeSpace: '#141823',
  },
  breakpoints: {
    mobile: 576,
    tablet: 768,
    laptop: 900,
    mediumScreen: 1200,
    largeScreen: 1400,
    wideScreen: 1900,
  },

  space: (units: number) => `${units * SPACE_UNIT}px`,
}
