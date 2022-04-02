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
    lightGrey: 'lightgrey',
  },
  space: (units: number) => units * SPACE_UNIT,
}
