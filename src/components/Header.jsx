import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Switchs from 'react-switch'

function Header(props) {
  // let conditionColor = { color: '#dc3545', fontWeight: 'bold' }
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    changeTheme()
    // eslint-disable-next-line
  }, [])

  const changeTheme = () => {
    setDark(!isDark)
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) body.classList.remove('dark')
    else body.classList.add('dark')
  }

  function DarkModeicon() {
    return (
      <div
        style={{ color: '#242526', paddingLeft: '10px', paddingTop: '1.8px' }}
      >
        <i className="fas fa-moon"></i>
      </div>
    )
  }

  function LightModeIcon() {
    return (
      <div style={{ color: 'white', paddingLeft: '10px', paddingTop: '1.8px' }}>
        <i className="fas fa-lightbulb"></i>
      </div>
    )
  }
  return (
    <div className="navbar-header">
      <div className="flex-row flex-end-col pt-2 pr-3.5 container">
        <Link
          className="no-underline	nav-item active zoom p10 no-style pointer text-red-500 hover:text-red-700 font-bold"
          to="/"
        >
          About
        </Link>
        <Link
          className="no-underline	nav-item active zoom p10 no-style pointer text-red-500 hover:text-red-700 font-bold"
          to="/blogs"
        >
          Blog
        </Link>

        <div className="nav-item custom-control custom-switch pt-1.5 px-5">
          <Switchs
            onChange={changeTheme}
            checked={isDark}
            onColor="#dc3545"
            offColor="#dc3545"
            onHandleColor="#242526"
            uncheckedIcon={<LightModeIcon />}
            checkedIcon={<DarkModeicon />}
            width={60}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
