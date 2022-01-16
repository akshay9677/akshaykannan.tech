import React, { useEffect, useState } from "react";
import { Text } from "ak-palette";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header(props) {
  const router = useRouter();
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    let theme = localStorage.getItem("dark-theme");
    if (theme) {
      body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const changeTheme = () => {
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
        backdropFilter: " saturate(50%) blur(10px)",
      }}
    >
      <div className="flex justify-between items-center max-w-3xl mx-auto py-5 px-8 lg:pl-0 lg:pr-0">
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
            className="ml-8 pointer font-medium hover:opacity-60 cursor-pointer"
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
            className="ml-8 pointer font-medium hover:opacity-60 cursor-pointer"
            onClick={() => router.push("/blog")}
          >
            <Text size="large" className="dark:text-white">
              Blog
            </Text>
          </div>
        </div>
        <div
          className="w-10 h-10 bg-gray-200 rounded-lg dark:bg-gray-800 hover:ring-2 ring-gray-300 cursor-pointer flex items-center justify-center"
          onClick={changeTheme}
        >
          <DarkModeSwitch
            onChange={() => {}}
            checked={isDark}
            size={20}
            moonColor="#fff"
            sunColor="#244361"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
