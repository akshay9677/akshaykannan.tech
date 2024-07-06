import PaltteIcon from "public/brand/palette.svg";
import { FigmaPointer } from "../core/FigmaPointer";
import ShinyButton from "../core/ShinyButton";

const Header = () => {
  return (
    <div className="py-4 max-w-xl w-full flex items-center justify-between px-6 lg:px-2 xl:px-2">
      <FigmaPointer title="Palette Designs">
        <PaltteIcon />
      </FigmaPointer>
    </div>
  );
};

export default Header;
