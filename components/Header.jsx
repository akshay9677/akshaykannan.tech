import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Avatar, Text } from "@nextui-org/react";

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
      }}
    >
      <div className="flex justify-between items-center max-w-3xl mx-auto pt-4 pb-3 px-5 xl:px-3 lg:px-3">
        <div className="flex items-center">
          <div
            className="cursor-pointer flex items-center hover:opacity-60"
            onClick={() => router.push("/")}
          >
            <Text size="large" className="dark:text-white">
              Home
            </Text>
          </div>
          <div
            className="ml-4 pointer font-medium hover:opacity-60 cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.polywork.com/_akshay_kannan_")
            }
          >
            <Text size="large" className="dark:text-white">
              Timeline
            </Text>
          </div>
          <div
            className="ml-4 pointer font-medium hover:opacity-60 cursor-pointer"
            onClick={() => router.push("/blog")}
          >
            <Text size="large" className="dark:text-white">
              Blog
            </Text>
          </div>
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
