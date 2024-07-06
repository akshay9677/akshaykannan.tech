import NextIcon from "public/hover-texts/frameworks/nextjs.svg";
import VueIcon from "public/hover-texts/frameworks/vue.svg";
import ReactIcon from "public/hover-texts/frameworks/react.svg";
import AngularIcon from "public/hover-texts/frameworks/angular.svg";
import SvelteIcon from "public/hover-texts/frameworks/svlete.svg";
import JsIcon from "public/hover-texts/frameworks/javascript.svg";
import GatsbyIcon from "public/hover-texts/frameworks/gatsby.svg";

import BardIcon from "public/hover-texts/design/bard.svg";
import BehanceIcon from "public/hover-texts/design/behance.svg";
import ContrastIcon from "public/hover-texts/design/contrast.svg";
import DribbbleIcon from "public/hover-texts/design/dribbble.svg";
import TailwindIcon from "public/hover-texts/design/tailwind.svg";
import TelegramIcon from "public/hover-texts/design/telegram.svg";
import PaletteIcon from "public/hover-texts/design/palette.svg";

import BoxIcon from "public/hover-texts/build/box.svg";
import CodePenIcon from "public/hover-texts/build/codepen.svg";
import FirebaseIcon from "public/hover-texts/build/firebase.svg";
import HammerIcon from "public/hover-texts/build/hammer.svg";
import NodeIcon from "public/hover-texts/build/nodejs.svg";
import WindowIcon from "public/hover-texts/build/window.svg";

const ICON_HASH = {
  design: (
    <div>
      <div className="absolute left-1 -rotate-3 scale-0 group-hover:scale-100 transition duration-700">
        <BardIcon className="w-10 h-10" />
      </div>
      <div className="absolute left-10 top-24 -rotate-12 scale-0 group-hover:scale-100 transition duration-700">
        <BehanceIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-16 top-1 -rotate-6 scale-0 group-hover:scale-100 transition duration-700">
        <ContrastIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-8 top-14 -rotate-12 scale-0 group-hover:scale-100 transition duration-700">
        <DribbbleIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-4 left-[47%] -rotate-12 scale-0 group-hover:scale-100 transition">
        <TailwindIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-7 left-[60%] rotate-3 scale-0 group-hover:scale-100 transition duration-500">
        <TelegramIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-6 left-[30%] -rotate-6 scale-0 group-hover:scale-100 transition duration-500">
        <PaletteIcon className="w-10 h-10" />
      </div>
    </div>
  ),
  frameworks: (
    <div>
      <div className="absolute left-1 -rotate-3 scale-0 group-hover:scale-100 transition duration-700">
        <NextIcon className="w-10 h-10" />
      </div>
      <div className="absolute left-10 top-24 -rotate-12 scale-0 group-hover:scale-100 transition duration-700">
        <VueIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-16 top-1 -rotate-6 scale-0 group-hover:scale-100 transition duration-700">
        <GatsbyIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-8 top-14 -rotate-12 scale-0 group-hover:scale-100 transition duration-700">
        <AngularIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-4 left-[47%] -rotate-12 scale-0 group-hover:scale-100 transition">
        <SvelteIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-7 left-[60%] rotate-3 scale-0 group-hover:scale-100 transition duration-500">
        <JsIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-6 left-[30%] -rotate-6 scale-0 group-hover:scale-100 transition duration-500">
        <ReactIcon className="w-10 h-10" />
      </div>
    </div>
  ),
  build: (
    <div>
      <div className="absolute left-1 -rotate-3 top-10 scale-0 group-hover:scale-100 transition duration-500">
        <BoxIcon className="w-10 h-10" />
      </div>
      <div className="absolute left-10 top-24 -rotate-12 scale-0 group-hover:scale-100 transition duration-500">
        <FirebaseIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-16 top-1 -rotate-6 scale-0 group-hover:scale-100 transition duration-500">
        <WindowIcon className="w-10 h-10" />
      </div>
      <div className="absolute right-8 top-14 -rotate-12 scale-0 group-hover:scale-100 transition duration-500">
        <HammerIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-5 left-[55%] -rotate-12 scale-0 group-hover:scale-100 transition">
        <NodeIcon className="w-10 h-10" />
      </div>
      <div className="absolute -top-6 left-[40%] -rotate-6 scale-0 group-hover:scale-100 transition">
        <CodePenIcon className="w-10 h-10" />
      </div>
    </div>
  ),
};

export default ICON_HASH;
