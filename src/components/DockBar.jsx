import Search from "../../public/dock/search.svg";
import Pen from "../../public/dock/pen.svg";
import Home from "../../public/dock/home.svg";
import Moon from "../../public/dock/moon.svg";
import Sun from "../../public/dock/sun.svg";
import { useRouter } from "next/router";

const DockBar = ({ toggleTheme, isDark }) => {
  const router = useRouter();
  const appHash = [
    {
      icon: () => <Search />,
      key: "search",
    },
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
      icon: () => (!isDark ? <Moon /> : <Sun />),
      key: "theme",
      onClick: () => {
        toggleTheme();
      },
    },
  ];
  return (
    <div className="fixed bottom-8 w-full flex items-center justify-center z-30">
      <div
        className="bg-content-primary/10 p-2 flex gap-5 rounded-xl"
        style={{ backdropFilter: "blur(6px)" }}
      >
        {appHash.map((app) => {
          return (
            <div
              className="bg-primary text-content-primary/50 hover:text-content-primary p-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-1.5"
              key={app.key}
              onClick={app.onClick}
            >
              {app.icon()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DockBar;
