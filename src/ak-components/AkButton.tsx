import React from 'react'

interface Props {
  onClick: () => void
  loading: Boolean | false
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  loading,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-2 bg-red-500	text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 flex flex-row justify-center"
    >
      {loading && (
        <div
          className="mr-3 border-solid border-2 animate-spin rounded-full border-white-400 h-5 w-5 my-auto"
          style={{ borderTopColor: 'transparent' }}
        ></div>
      )}
      {children}
    </button>
  )
}

export default Button
