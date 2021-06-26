import React, { Fragment } from 'react'
import { Text } from 'ak-palette'

function Details(props) {
  function facilioClick() {
    window.open('https://facilio.com/')
  }

  return (
    <Fragment>
      <div>
        <Text
          size="xxxlarge"
          className="text-4xl font-bold text-center block-header dark:text-white"
        >
          About
        </Text>
        <Text
          size="large"
          className="max-w-md mx-auto overflow-hidden md:max-w-2xl md:flex flex-column justify-center relative text-gray-700 text-md dark:text-white p-5"
        >
          <span>
            {' '}
            Hi, I'm an Undergraduate Electrical Engineer working as a Software
            Dev{' '}
            <span
              className="text-red-500 pointer underline hover:text-red-600"
              onClick={facilioClick}
            >
              {' '}
              @Facilio
            </span>
            . <br />
            I'm a Front-end dev & Javascript enthusisat and can create
            responsive and scalable web apps using the latest technologies
            available.
          </span>
        </Text>
      </div>
    </Fragment>
  )
}

export default Details
