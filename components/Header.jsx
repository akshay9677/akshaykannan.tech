import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Avatar, Text, Button } from "@nextui-org/react";

function Header({ onDarkChange }) {
  const router = useRouter();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    let theme = localStorage.getItem("dark-theme");
    if (theme) {
      body.classList.add("dark");
      setDark(true);
      onDarkChange(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    onDarkChange(!isDark);
    setDark(!isDark);
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.removeItem("dark-theme");
    } else {
      body.classList.add("dark");
      localStorage.setItem("dark-theme", true);
    }
  };
  return (
    <div
      className="navbar-header"
      style={{
        backdropFilter: "saturate(180%) blur(5px)",
        position: "fixed",
        top: "0px",
        right: "1px",
        zIndex: 99,
        width: "100%",
      }}
    >
      <div
        className="flex justify-between items-center mx-auto pt-4 pb-3 px-5 xl:pl-0 xl:pr-3 lg:pl-0 lg:pr-3"
        style={{ maxWidth: "48.5rem" }}
      >
        <div className="flex items-center">
          <Button
            size="sm"
            light
            color="inherit"
            auto
            onClick={() => router.push("/")}
          >
            Home
          </Button>
          <Button
            size="sm"
            light
            color="inherit"
            auto
            onClick={() =>
              (window.location.href =
                "https://www.polywork.com/_akshay_kannan_")
            }
          >
            Timeline
          </Button>
          <Button
            size="sm"
            light
            color="inherit"
            auto
            onClick={() => router.push("/blog")}
          >
            Blog
          </Button>
        </div>
        <Avatar
          squared
          onClick={changeTheme}
          style={{ cursor: "pointer" }}
          bordered
          icon={
            <DarkModeSwitch
              onChange={() => {}}
              checked={isDark}
              size={20}
              moonColor="#fff"
              sunColor="#244361"
            />
          }
        />
      </div>
    </div>
  );
}

export default Header;
