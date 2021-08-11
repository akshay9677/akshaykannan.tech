import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "ak-palette";

function Header(props) {
  // let conditionColor = { color: '#dc3545', fontWeight: 'bold' }
  const [isDark, setDark] = useState(false);

  const changeTheme = () => {
    setDark(!isDark);
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) body.classList.remove("dark");
    else body.classList.add("dark");
  };

  function DarkModeicon() {
    return (
      <div style={{ color: "#fff", width: "20px" }}>
        <i className="fas fa-moon"></i>
      </div>
    );
  }

  function LightModeIcon() {
    return (
      <div style={{ color: "#fff", width: "20px" }}>
        <i className="fas fa-lightbulb"></i>
      </div>
    );
  }
  return (
    <div className="navbar-header">
      <div className="flex justify-between max-w-4xl mx-auto py-5 pl-8 lg:pl-0">
        <Button type={isDark ? "info" : "default"} onClick={changeTheme}>
          {isDark ? <LightModeIcon /> : <DarkModeicon />}
        </Button>
        <div className="flex">
          <Link className="pr-10 pointer font-medium" to="/">
            <Text size="large" className="dark:text-white">
              Home
            </Text>
          </Link>
          <Link className="pr-10 pointer font-medium" to="/blogs">
            <Text size="large" className="dark:text-white">
              Blogs
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
