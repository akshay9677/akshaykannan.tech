import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../config/baseUrl'
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

        <div className="text-center h-16">
          <button
            onClick={handleLikeClick}
            className="py-2 px-4 bg-red-500	text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            <i className="far fa-thumbs-up"></i> {likes} {' Likes'}
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Details
