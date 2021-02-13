import React, { Fragment } from 'react'

import IntroPage from '../components/IntroPage'
import Details from '../components/Details'
import Journey from '../components/Journey'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

function Main(props) {
  return (
    <Fragment>
      <IntroPage />
      <Details />
      <Journey />
      <Skills />
      <Contact />
    </Fragment>
  )
}

export default Main
