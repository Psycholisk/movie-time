// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyFontSize: string
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
      lightGrey: string
      [key: string]: string
    }
  }
}
