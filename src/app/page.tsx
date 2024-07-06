import Intro from "@/components/Intro";
import IntroBento from "@/components/IntroBento";
import RecentPosts from "@/components/RecentPosts";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Intro />
      <IntroBento />
      <RecentPosts />
      <Subscribe />
    </div>
  );
}
