// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string
    }
    fontWeights: {
      light: number
      regular: number
      medium: number
      bold: number
    }
    colors: {
      negativeSpace: string
      primaryText: string
      secondaryText: string
      dimmedWhite: string
      [key: string]: string
    }
    breakpoints: {
      mobile: number
      tablet: number
      laptop: number
      mediumScreen: number
      largeScreen: number
      wideScreen: number
    }
    space: (units: number) => string
  }
}
