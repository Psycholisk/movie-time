// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGrey: string
      [key: string]: string
    }
  }
}
