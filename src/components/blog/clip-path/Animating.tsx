"use client";
import { useState } from "react";

const Animating = () => {
  const [isRound, setRound] = useState(true);
  return (
    <div className="my-2 flex flex-col">
      <pre className="border border-border-primary flex rounded-md bg-container-secondary text-xs">
        {`clip-path: ${
          isRound ? "xywh(0 0 100% 100%);" : "xywh(0 0 100% 100% round 50%);"
        }
transition: clip-path 0.25s ease;`}
      </pre>
      <div className="w-full border border-border-secondary px-2 py-4 rounded-md my-2 flex flex-col gap-4 items-center">
        <div
          className="w-48 h-48 bg-[#0052CE] tab-switch-clip-path"
          style={{
            clipPath: isRound
              ? "xywh(0 0 100% 100%)"
              : "xywh(0 0 100% 100% round 50%)",
          }}
        ></div>
        <button
          onClick={() => setRound(!isRound)}
          className="flex items-center gap-2 text-sm bg-content-primary text-container-primary rounded-lg py-2 px-3 cursor-pointer hover:-translate-y-0.5 transition active:translate-y-0 hover:shadow-lg"
        >
          {!isRound ? "Flatten the borders" : "Animate border radius"}
        </button>
      </div>
    </div>
  );
};

export default Animating;
