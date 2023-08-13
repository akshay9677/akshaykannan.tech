import Search from "../../public/dock/search.svg";
import Pen from "../../public/dock/pen.svg";
import Home from "../../public/dock/home.svg";
import Moon from "../../public/dock/moon.svg";

const DockBar = ({ toggleTheme }) => {
  const appHash = [
    {
      icon: () => <Search />,
      key: "search",
    },
    {
      icon: () => <Pen />,
      key: "blog",
    },
    {
      icon: () => <Home />,
      key: "home",
    },
    {
      icon: () => <Moon />,
      key: "theme",
      onClick: () => {
        toggleTheme();
      },
    },
  ];
  return (
    <div className="fixed bottom-8 w-full flex items-center justify-center z-40">
      <div
        className="bg-content-primary/10 p-2 flex gap-5 rounded-xl"
        style={{ backdropFilter: "blur(6px)" }}
      >
        {appHash.map((app) => {
          return (
            <div
              className="bg-primary text-content-primary/60 hover:text-content-primary p-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-1.5"
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
