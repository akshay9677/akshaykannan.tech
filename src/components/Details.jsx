import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../config/baseUrl'

import AkButton from '../ak-components/AkButton'

function Details(props) {
  const [likes, setLikes] = useState(10)
  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(`${baseUrl}/api/v1/likes`)
      let { likes } = data.data[0]
      setLikes(likes)
    }
    fetchData()
  }, [])

  async function handleLikeClick() {
    setLikes(likes + 1)
    await axios.post(`${baseUrl}/api/v1/likes`)
  }

  function facilioClick() {
    window.open('https://facilio.com/')
  }

  return (
    <Fragment>
      <div>
        <div className="text-4xl font-bold text-center block-header">About</div>
        <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl md:flex flex-column justify-center relative text-gray-700 text-xl dark:text-white p-5">
          <span>
            {' '}
            I'm an Undergraduate Electrical Engineer working as a Software Dev{' '}
            <span
              className="text-red-500 pointer underline hover:text-red-600"
              onClick={facilioClick}
            >
              {' '}
              @Facilio
            </span>{' '}
            <br />
            Also I'm a passionate mobile / web developer and I can create
            responsive webapps and scalable mobile apps using the latest
            technologies available.
          </span>
        </div>

        <div className="flex justify-center mb-10">
          <AkButton
            onClick={handleLikeClick}
            children={
              <span>
                <i className="far fa-thumbs-up"></i> {likes} {' Likes'}
              </span>
            }
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Details
