import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorSvg from '../assets/Error404.svg'
import '../assets/blogpost.css'
import AkTags from '../ak-components/AkTags'
import { BLOG_LIST } from './BlogsList'

import CustomEslintPlugin from '../mdx-blogs/CustomEslintPlugin.mdx'
import ESFeatures from '../mdx-blogs/ES2020.mdx'
import TypescriptImportance from '../mdx-blogs/TypescriptImportance.mdx'

const postsHash = [
  {
    id: '602010e1aa66c40048eda73e',
    post: () => <CustomEslintPlugin />,
  },
  {
    id: '5fe57ec407543e5777d060ec',
    post: () => <ESFeatures />,
  },
  {
    id: '6032245c0b8c9646a0f12f2b',
    post: () => <TypescriptImportance />,
  },
]

function BlogPage(props) {
  const { id } = useParams()
  const [blog, setblog] = useState(null)
  useEffect(() => {
    async function fetchData() {
      setblog(BLOG_LIST.find((blog) => blog._id === id))
    }
    fetchData()
    // eslint-disable-next-line
  }, [])
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
    <div className="pt-14 flex items-center flex-col">
      <div className="flex justify-center w-10/12 ">
        {blog && (
          <div style={{ width: '100%', minHeight: '42rem' }}>
            <h1 className="blog-post-header text-center py-3">
              {blog.subject}
            </h1>
            <div className="mt-1 flex flex-wrap">
              {blog.tags ? (
                blog.tags.map((tag, index) => <AkTags key={index} name={tag} />)
              ) : (
                <span></span>
              )}
            </div>
            <div className="blog-post-content">{getBlogPost()}</div>
          </div>
        )}
      </div>
      <div className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </div>
    </div>
  )
}

export default BlogPage
