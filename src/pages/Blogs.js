import React, { useContext } from 'react'
import BlogsList from '../components/BlogsList'
import { Theme } from '../App'

function Blogs(props) {
  const { darkTheme } = useContext(Theme)
  return (
    <div
      id="blogs-list"
      style={{
        paddingTop: '3rem',
      }}
    >
      <BlogsList dark={darkTheme} />
    </div>
  )
}

export default Blogs
