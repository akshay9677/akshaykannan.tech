import React, { Fragment } from 'react'

import IntroPage from '../components/IntroPage.jsx'
import Details from '../components/Details.jsx'
import Journey from '../components/Journey.jsx'
import Contact from '../components/Contact.jsx'
import Skills from '../components/Skills.jsx'
import Project from '../components/Projects'

function Main(props) {
  return (
    <Fragment>
      <IntroPage />
      <Details />
      <Journey />
      <Project />
      <Skills />
      <Contact />
    </Fragment>
  )
}

export default Main
