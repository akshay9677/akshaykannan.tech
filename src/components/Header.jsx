import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "ak-palette";
import Logo from "../images/logo.svg";

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
      <div className="flex justify-between max-w-4xl mx-auto py-5 px-8 lg:pl-0">
        <Link className="pointer flex items-center hover:opacity-60" to="/">
          <img src={Logo} alt="errorSvg" />
        </Link>
        <div className="flex items-center">
          <Link
            className="mr-10 pointer font-medium hover:opacity-60"
            to="/blogs"
          >
            <Text size="large" className="dark:text-white">
              Blog
            </Text>
          </Link>
          <Button type={isDark ? "info" : "default"} onClick={changeTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeicon />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
