import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Blogs from "./pages/Blogs";
import PostBody from "./pages/PostBody";
import Header from "./components/Header";
import "./assets/main.css";
import "./App.css";

export const Theme = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div
      className="App min-h-screen"
      style={{
        backgroundColor: darkTheme ? "#242526" : "#F0F2F5",
        overflowX: "hidden",
      }}
    >
      <Theme.Provider value={{ darkTheme }}>
        <Router route>
          <Route to="/">
            <Fragment>
              <div
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "1px",
                  zIndex: 99,
                  width: "100%",
                }}
              >
                <Header
                  dark={darkTheme}
                  blog={true}
                  onChange={() => {
                    setDarkTheme(!darkTheme);
                  }}
                  checked={darkTheme}
                />
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
      </Theme.Provider>
    </div>
  );
}

export default App;
