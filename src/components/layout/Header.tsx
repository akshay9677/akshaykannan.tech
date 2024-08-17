"use client";

import PaltteIcon from "public/brand/palette.svg";
import { FigmaPointer } from "../core/FigmaPointer";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div
      className="py-4 max-w-xl w-full flex items-center justify-between px-6 lg:px-2 xl:px-2"
      onClick={() => {
        router.push("/");
      }}
    >
      <FigmaPointer title="Palette Designs">
        <PaltteIcon />
      </FigmaPointer>
      <div></div>
    </div>
  );
};

export default Header;
