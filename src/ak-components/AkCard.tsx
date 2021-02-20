import React from 'react'

import AkButton from './AkButton'

interface CardProps {
  title: String
  content: String
  image: () => void
  click: () => void
}

const AkCard: React.FC<CardProps> = ({
  title,
  content,
  image,
  click,
}): JSX.Element => {
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden my-10 pointer">
      {image}
      <div className="px-4 py-2">
        <h1 className="font-bold text-lg uppercase">{title}</h1>
        <p className="text-sm mt-1">{content}</p>
        <div className="pt-5 py-3">
          <AkButton
            onClick={click}
            children={
              <span>
                Git <i className="fab fa-github"></i>
              </span>
            }
            loading={false}
          />
        </div>
      </div>
    </div>
  )
}

export default AkCard
