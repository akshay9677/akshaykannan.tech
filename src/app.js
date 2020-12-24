import React, { Component, useEffect, useState } from "react";
import Switchs from "react-switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import "./assets/main.css";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  function DarkModeicon() {
    return (
      <div style={{ color: "white", paddingLeft: "10px", paddingTop: "1.8px" }}>
        <i className='fas fa-moon'></i>
      </div>
    );
  }

  function LightModeIcon() {
    return (
      <div style={{ color: "white", paddingLeft: "10px", paddingTop: "1.8px" }}>
        <i className='fas fa-lightbulb'></i>
      </div>
    );
  }
  return (
    <div
      className='App'
      style={{ backgroundColor: darkTheme ? "#242526" : "#F0F2F5" }}
    >
      <div
        style={{
          position: "fixed",
          top: "0px",
          right: "1px",
          zIndex: 99,
          width: "100%",
        }}
      >
        <Header dark={darkTheme} blog={true} />
      </div>
      <div
        className='custom-control custom-switch'
        style={{ position: "fixed", bottom: "30px", left: "1px", zIndex: 99 }}
      >
        <Switchs
          onChange={() => setDarkTheme(!darkTheme)}
          checked={darkTheme}
          onColor='#000000'
          offHandleColor='#000000'
          uncheckedIcon={<LightModeIcon />}
          checkedIcon={<DarkModeicon />}
          width={60}
        />
      </div>
      <Router route>
        <Route to='/'>
          <Switch>
            <Route exact path='/'>
              <Main dark={darkTheme} />
            </Route>
            <Route exact path='/blogs'>
              <Blogs dark={darkTheme} />
            </Route>
            <Route path='/blogs/:id'>
              <BlogPost dark={darkTheme} />
            </Route>
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
