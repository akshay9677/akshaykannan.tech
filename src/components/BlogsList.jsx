import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../config/baseUrl'
import { getTimeFromNow } from '../util/time'

import AkTags from '../ak-components/AkTags'
import AkSnackBar from '../ak-components/AkSnackBar'

const BlogBody = (props) => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setloading] = useState(false)
  const [open, setopen] = useState(false)
  const [failed, setfailed] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const history = useHistory()

  useEffect(() => {
    fetchData()
  }, [])

  const styles = {
    avatar: {
      borderRadius: '0.5rem',
      background: '#DC3545',
      width: '2.5rem',
      height: '2.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    blogContainer: {
      overflowY: 'auto',
      minHeight: '45rem',
    },
  }

  const fetchData = async (showMessage, isSaved) => {
    if (showMessage) {
      setopen(true)
      if (isSaved) {
        setfailed(false)
        setSnackMessage('Blog posted!!')
      } else {
        setfailed(true)
        setSnackMessage('Error occured')
      }
    }
    setloading(true)
    let { data } = await axios.get(`${baseUrl}/api/v1/blog`)
    if (!data.error) {
      setBlogs(data.data)
    }
    setloading(false)
  }
  function stripHtml(html) {
    var temporalDivElement = document.createElement('div')
    temporalDivElement.innerHTML = html
    return temporalDivElement.textContent || temporalDivElement.innerText || ''
  }
  const handleBlogClick = (blog) => {
    history.push(`/blogs/${blog._id}`)
  }
  return (
    <div style={styles.blogContainer} className="hideScroll h-screen">
      <AkSnackBar
        open={open}
        failed={failed}
        message={snackMessage}
        onClose={() => setopen(false)}
      />

      {loading ? (
        <div className="flex flex-row justify-center items-center h-5/6 pt-6">
          <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div
              style={{ borderTopColor: 'transparent' }}
              className="border-solid animate-spin  rounded-full border-red-500 border-4 h-10 w-10"
            ></div>
          </div>
        </div>
      ) : (
        blogs &&
        blogs.map((blog) => {
          return (
            <div key={blog._id} className="flex  justify-center p10 mt-3">
              <div className="flex flex-row w-10/12 rounded-lg p-2 bg-white dark:bg-gray-800	">
                <div className="my-4 mx-1">
                  <div className="w-10 h-10 rounded-lg text-2xl text-white flex justify-center items-center bg-red-500">
                    {blog.email.slice(0, 1).toUpperCase()}
                  </div>
                </div>
                <div className="flex flex-col truncate-text pL10 w-12/12">
                  <div
                    className="truncate-text text-xl pointer"
                    style={{ fontWeight: 'bold' }}
                    onClick={handleBlogClick.bind(this, blog)}
                  >
                    {blog.subject}
                  </div>

                  <div className="truncate-text pT10 pB10 text-sm	">
                    {stripHtml(blog.post)}
                  </div>
                  {blog.tags && (
                    <div className="py-2 flex flex-wrap">
                      {blog.tags.map((tag, index) => (
                        <AkTags key={index} name={tag} />
                      ))}
                    </div>
                  )}
                  <div className="flex-row">
                    <div style={{ marginTop: '-4px' }}>
                      <span className="badge badge-danger text-sm text-red-500">
                        <i className="fas fa-fire mr-1"></i>
                        {blog.likes ? blog.likes : 0}
                      </span>
                    </div>

                    <div style={{ fontSize: '4px', padding: '7.2px 6px' }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div className="text-sm text-gray-500">
                      {getTimeFromNow(blog.sysCreatedTime)}
                    </div>

                    <div style={{ fontSize: '4px', padding: '7.2px 6px' }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div className="text-sm text-gray-500">{blog.email}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
      {blogs && (
        <footer className="flex justify-center py-3" style={{ color: '#888' }}>
          © Akshay Kannan
        </footer>
      )}
    </div>
  )
}

export default BlogBody
