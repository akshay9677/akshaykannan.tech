import React, { useEffect } from 'react'

interface SnackBarProps {
  content: () => void
  open: Boolean
  failed: boolean
  onClose: () => void
}

const AkSnackBar: React.FC<SnackBarProps> = ({
  open,
  content,
  failed,
  onClose,
}): JSX.Element => {
  useEffect((): void => {
    if (open) {
      setTimeout(() => onClose(), 3000)
    }
    // eslint-disable-next-line
  }, [open])

  if (open) {
    return (
      <div
        style={{ borderLeft: 'solid', color: failed ? '#DC3545' : '#10B981' }}
        className="fixed right-0 left-10 bottom-5 shadow-2xl flex w-40 rounded-md bg-white float-left px-5 py-3 justify-center items-center dark:bg-gray-800"
      >
        {!failed ? (
          <span className="mr-2">
            <i className="fas fa-check-circle"></i>
          </span>
        ) : (
          <span className="mr-2">
            <i className="fas fa-times"></i>
          </span>
        )}
        {content}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default AkSnackBar
