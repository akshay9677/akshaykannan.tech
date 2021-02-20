import React from 'react'
import BlogsList from '../components/BlogsList.jsx'

function Blogs(props) {
  return (
    <div
      id="blogs-list"
      style={{
        paddingTop: '3rem',
      }}
    >
      <BlogsList />
    </div>
  )
}

export default Blogs
