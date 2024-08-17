import Intro from "./Intro";
import "../../../styles/blog/clip-path.css";
import ImageSwitch from "./ImageWithMovingLine";
import TabSwitch from "./TabSwitch";
import TabSwitchDefault from "./TabSwitchDefault";
import Animating from "./Animating";

type ComponentTypes = "intro";

const COMP_HASH = {
  intro: <Intro />,
  imageSwitch: <ImageSwitch />,
  tabSwitch: <TabSwitch />,
  tabSwitchDefault: <TabSwitchDefault />,
  animating: <Animating />,
};

const ClipPathComponents = ({ comp }: { comp: ComponentTypes }) => {
  return COMP_HASH[comp];
};

export default ClipPathComponents;
