import { createGlobalStyle } from 'styled-components'

/**
 * Global styles that resets css and sets the base elements styling
 */
const BaseStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: auto;
  font-size: 10px;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.4rem;
  font-family: ${(p) => p.theme.fonts.primary};
  min-height: 100%;
  min-width: 320px;
  background-color: ${(p) => p.theme.colors.negativeSpace};
  color: ${(p) => p.theme.colors.primaryText};
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
  display: initial;
  line-height: inherit;
  font-size: inherit;
}

ul,
ol {
  margin-bottom: 0;
  list-style-type: none;
}

a {
  color: inherit;
  text-decoration: inherit;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

input,
select,
img {
  border: 0;
  outline: 0;
}

-webkit-tap-highlight-color: transparent;

`
export default BaseStyles
