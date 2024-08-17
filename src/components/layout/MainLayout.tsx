import { useTheme } from "@/hooks/useTheme";
import DockBar from "./DockBar";
import Header from "./Header";

type MainLayoutType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  const { isDark, setTheme } = useTheme();
  return (
    <body
      className={`relative h-screen w-full  ${
        isDark ? "theme-dark" : "theme-light"
      } bg-container-primary text-content-primary transition-colors overflow-hidden`}
    >
      <div className="h-screen overflow-scroll pb-20">{children}</div>
      <DockBar isDark={isDark} changeTheme={() => setTheme(!isDark)} />
    </body>
  );
};

export default MainLayout;
