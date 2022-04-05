import React from 'react'
import styled from 'styled-components'

const SpinnerElement = styled.div`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: spin 1.5s infinite ease-in-out;
  animation: spin 1.5s infinite ease-in-out;
  color: #ffffff;
  font-size: 10px;
  margin: ${(p) => p.theme.space(4)} auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: spin 1.5s infinite ease-in-out;
    animation: spin 1.5s infinite ease-in-out;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }

  @-webkit-keyframes spin {
    0%,
    80%,
    100% {
      box-shadow: 0 1.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 1.5em 0 0;
    }
  }
  @keyframes spin {
    0%,
    80%,
    100% {
      box-shadow: 0 1.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 1.5em 0 0;
    }
  }
`

const Spinner = (): JSX.Element => <SpinnerElement />

export default Spinner
