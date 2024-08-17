import { Dock, DockCard, DockDivider } from "../core/BaseDockBar";
import SunIcon from "public/icons/outline/sun.svg";
import MoonIcon from "public/icons/outline/moon.svg";
import HomeIcon from "public/icons/outline/home.svg";
import PenIcon from "public/icons/outline/pen.svg";
import MailIcon from "public/icons/outline/mail.svg";
import { useRouter } from "next/navigation";

type DockBarType = {
  isDark: boolean;
  changeTheme: () => void;
};

const DockBar: React.FC<DockBarType> = ({ isDark, changeTheme }) => {
  const router = useRouter();
  return (
    <>
      <Dock>
        <DockCard id={"1"} handleClick={() => router.push("/")}>
          <div className="flex items-center justify-center">
            <HomeIcon />
          </div>
        </DockCard>
        <DockCard id={"2"} handleClick={() => router.push("/blog")}>
          <div className="flex items-center justify-center">
            <PenIcon />
          </div>
        </DockCard>
        <DockCard
          id={"3"}
          handleClick={() => window.open("mailto:akshaykannan9677@gmail.com")}
        >
          <div className="flex items-center justify-center">
            <MailIcon />
          </div>
        </DockCard>
        <DockDivider />
        <DockCard id={"4"} handleClick={() => changeTheme()}>
          <div className="flex items-center justify-center">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </div>
        </DockCard>
      </Dock>
    </>
  );
};

export default DockBar;
