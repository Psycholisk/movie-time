import { DefaultTheme } from 'styled-components'

const SPACE_UNIT = 8

export const defaultTheme: DefaultTheme = {
  fonts: {
    primary: `'Montserrat', sans-serif`,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primaryText: '#e4f0ff',
    secondaryText: '#8c9097',
    complementary: '#D6A419',
    dimmedWhite: '#bec6cf',
    negativeSpace: '#141823',
    negativeSpaceContrast: '#1f2430',
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
