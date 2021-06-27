import React from 'react'

interface TagsProps {
  name: String
}

const Tags: React.FC<TagsProps> = ({ name }): JSX.Element => {
  return (
    <span className="bg-red-100 dark:bg-red-500 text-red-500 dark:text-white rounded-full text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
      {name}
    </span>
  )
}

export default Tags
