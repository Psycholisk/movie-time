/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopInterface {
  children: ReactNode
}

const ScrollToTop = ({ children }: ScrollToTopInterface): JSX.Element => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}

export default ScrollToTop
