import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Blogs from './pages/Blogs'
import PostBody from './pages/PostBody'
import Header from './components/Header.jsx'
import 'tailwindcss/tailwind.css'
import './App.css'

function App() {
  return (
    <div
      className="App min-h-screen font-sans bg-gray-100	dark:bg-gray-900 text-gray-900	dark:text-white "
      style={{
        overflowX: 'hidden',
      }}
    >
      <Router route>
        <Route to="/">
          <Fragment>
            <div
              style={{
                position: 'fixed',
                top: '0px',
                right: '1px',
                zIndex: 99,
                width: '100%',
              }}
            >
              <Header blog={true} />
            </div>
          </Fragment>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route path="/blogs/:id">
              <PostBody />
            </Route>
          </Switch>
        </Route>
      </Router>
    </div>
  )
}

export default App
