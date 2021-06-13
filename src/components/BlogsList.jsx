import React from 'react'

import { useHistory } from 'react-router-dom'
import { getTimeFromNow } from '../util/time'

import AkTags from '../ak-components/AkTags'

export const BLOG_LIST = [
  {
    email: 'akshaykannan9677@gmail.com',
    likes: 6,
    subject: '5 Most Important ES2020 features JS',
    sysCreatedTime: 1608875716124,
    tags: ['Javascript', 'ES2020'],
    _id: '5fe57ec407543e5777d060ec',
  },
  {
    email: 'akshaykannan9677@gmail.com',
    likes: 5,
    subject: 'Writing a custom eslint plugin',
    sysCreatedTime: 1612714209486,
    tags: ['ESLint', 'Javascript', 'AST', 'Espree'],
    __v: 0,
    _id: '602010e1aa66c40048eda73e',
  },
  {
    email: 'akshaykannan9677@gmail.com',
    likes: 100,
    subject: 'When you should opt for typescript ?',
    sysCreatedTime: 1613915938266,
    tags: ['Typescript', 'Javascript', 'Static Programming', 'TSC'],
    __v: 0,
    _id: '6032245c0b8c9646a0f12f2b',
  },
]

const BlogBody = (props) => {
  const history = useHistory()

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

  const handleBlogClick = (blog) => {
    history.push(`/blogs/${blog._id}`)
  }
  return (
    <div style={styles.blogContainer} className="hideScroll h-screen">
      {BLOG_LIST.map((blog) => {
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
      })}
      <footer className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </footer>
    </div>
  )
}

export default BlogBody
