import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config/baseUrl'
import ErrorSvg from '../assets/Error404.svg'
import '../assets/blogpost.css'

import CustomEslintPlugin from '../mdx-blogs/CustomEslintPlugin.mdx'
import ESFeatures from '../mdx-blogs/ES2020.mdx'

const postsHash = [
  {
    id: '602010e1aa66c40048eda73e',
    post: () => <CustomEslintPlugin />,
  },
  {
    id: '5fe57ec407543e5777d060ec',
    post: () => <ESFeatures />,
  },
]

function BlogPage(props) {
  const { id } = useParams()
  const [blog, setblog] = useState(null)
  const [loading, setloading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      setloading(true)
      try {
        let { data } = await axios.post(`${baseUrl}/api/v1/blog/summary`, {
          _id: id,
        })
        let { error } = data
        if (error) {
          throw error
        } else {
          setblog(data.data)
        }
      } catch (e) {}
      setloading(false)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
  function handleLikeClick() {
    setblog((preValue) => {
      return { ...preValue, likes: preValue.likes + 1 }
    })

    axios.put(`${baseUrl}/api/v1/blog/like`, blog)
  }
  const getBlogPost = () => {
    let currPost = postsHash.find((post) => post.id === id)
    if (currPost) {
      let { post } = currPost
      return post()
    } else {
      return (
        <div style={{ height: '39rem' }}>
          <div className="flex justify-content-center mt-5">
            <img src={ErrorSvg} alt="errorSvg" />
          </div>
          <div
            className="text-center text-2xl m-3 mb-5 mt-2"
            style={{
              color: props.dark ? 'white' : 'black',
              fontWeight: 'bold',
            }}
          >
            No Posts Found
          </div>
        </div>
      )
    }
  }
  return (
    <div className="pt-14">
      <div className="flex justify-center">
        {loading ? (
          <div className="flex flex-row justify-center items-center h-5/6 p-6">
            <div class="right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
              <div
                style={{ borderTopColor: 'transparent' }}
                class="border-solid animate-spin  rounded-full border-red-500 border-4 h-10 w-10"
              ></div>
            </div>
          </div>
        ) : (
          blog && (
            <div style={{ width: '63%', minHeight: '42rem' }}>
              <h1 className="text-center mb-4 font-bold">{blog.subject}</h1>
              <div className="ml-1 mt-1">
                {blog.tags ? (
                  blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full text-white bg-red-100 text-red-500 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span></span>
                )}
              </div>
              <div>{getBlogPost()}</div>
              <div className="flex flex-row m-4">
                <button
                  type="button"
                  className="px-2 py-1 mt-1 bg-red-500	text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  onClick={handleLikeClick}
                >
                  {blog.likes ? blog.likes : 0}
                  &nbsp;
                  <i className="fas fa-fire mr-1"></i>
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </div>
    </div>
  )
}

export default BlogPage
