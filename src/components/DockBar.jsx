import Mail from "../../public/dock/mail.svg";
import Pen from "../../public/dock/pen.svg";
import Home from "../../public/dock/home.svg";
import Moon from "../../public/dock/moon.svg";
import Sun from "../../public/dock/sun.svg";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DockBar = ({ toggleTheme, isDark }) => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const appHash = [
    {
      icon: () => <Home />,
      key: "home",
      onClick: () => {
        router.push("/");
      },
    },
    {
      icon: () => <Pen />,
      key: "blog",
      onClick: () => {
        router.push("/blog");
      },
    },
    {
      icon: () => <Mail />,
      key: "mail",
      onClick: () => {
        window.open("mailto:akshaykannan9677@gmail.com");
      },
    },
    {
      icon: () => (!isDark ? <Moon /> : <Sun />),
      key: "theme",
      onClick: () => {
        toggleTheme();
      },
    },
  ];
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.metaKey && e.which === 75) {
        e.preventDefault();
        setOpenSearch(true);
      }
    };
  }, []);
  return (
    <div className="fixed bottom-12 lg:bottom-16 w-full flex items-center justify-center z-30">
      <div
        className="bg-content-primary/10 p-2 flex gap-[14px] rounded-xl"
        style={{ backdropFilter: "blur(6px)" }}
      >
        {appHash.map((app) => {
          return (
            <div
              className="bg-primary text-content-primary group p-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-1.5"
              key={app.key}
              onClick={app.onClick}
            >
              {app.icon()}
            </div>
          );
        })}
      </div>
      {openSearch && <SearchBar closeSearch={(val) => setOpenSearch(val)} />}
    </div>
  );
};

export default DockBar;
