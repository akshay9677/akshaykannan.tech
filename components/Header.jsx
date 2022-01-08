import React, { useEffect, useState } from "react";
import { Text, Button } from "ak-palette";
import Image from "next/image";
import { useRouter } from "next/router";

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
    <div
      className="navbar-header"
      style={{
        backdropFilter: " saturate(50%) blur(10px)",
      }}
    >
      <div className="flex justify-between max-w-3xl mx-auto py-5 px-8 lg:pl-0">
        <div
          className="cursor-pointer flex items-center hover:opacity-60"
          onClick={() => router.push("/")}
        >
          <Image src="/logo.svg" alt="errorSvg" width="30px" height="30px" />
        </div>
        <div className="flex items-center">
          <div
            className="mr-10 pointer font-medium hover:opacity-60 cursor-pointer"
            onClick={() =>
              window.open("https://www.polywork.com/_akshay_kannan_")
            }
          >
            <Text size="large" className="dark:text-white">
              Timeline
            </Text>
          </div>
          <div
            className="mr-10 pointer font-medium hover:opacity-60 cursor-pointer"
            onClick={() => router.push("/blog")}
          >
            <Text size="large" className="dark:text-white">
              Blog
            </Text>
          </div>
          <Button type={isDark ? "info" : "default"} onClick={changeTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeicon />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
