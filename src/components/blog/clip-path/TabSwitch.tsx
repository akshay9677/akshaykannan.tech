"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const containerRef = useRef(null);
  const activeTabElementRef = useRef(null);
  const [clipPath, setClipPath] = useState("none");

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;
      console.log(activeTabElement);
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const { offsetWidth: containerOffset } = container;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        setClipPath(
          `inset(0 ${Number(
            100 - (clipRight / containerOffset) * 100
          ).toFixed()}% 0 ${Number(
            (clipLeft / containerOffset) * 100
          ).toFixed()}% round 17px)`
        );
      } else {
        setClipPath("none");
      }
    }
  }, [activeTab]);

  const tabs = [
    {
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
        </svg>
      ),
    },
    {
      label: "Blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.5962 1.03651L22.9428 7.38312C23.1381 7.57838 23.1381 7.89496 22.9428 8.09022C22.8679 8.16513 22.7712 8.21431 22.6665 8.23067L21.1924 8.46113L15.5356 2.80428L15.7477 1.31935C15.7868 1.04599 16.04 0.856036 16.3134 0.895088C16.4205 0.910388 16.5197 0.960011 16.5962 1.03651ZM4.59487 20.1478C8.31725 16.8163 12.5899 15.82 17.2379 14.6273L17.6843 10.6099L13.3869 6.31241L9.36936 6.7588C8.17674 11.4068 7.18038 15.6795 3.84886 19.4018L2.4541 18.0071C5.28253 14.7072 6.34319 11.0539 7.7574 4.9256L14.1214 4.21849L19.7783 9.87539L19.0711 16.2393C12.9429 17.6535 9.28947 18.7142 5.98964 21.5426L4.59487 20.1478ZM9.87872 14.118C9.09767 13.3369 9.09767 12.0706 9.87872 11.2896C10.6598 10.5085 11.9261 10.5085 12.7071 11.2896C13.4882 12.0706 13.4882 13.3369 12.7071 14.118C11.9261 14.899 10.6598 14.899 9.87872 14.118Z"></path>
        </svg>
      ),
    },
    {
      label: "Mail",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="my-2 flex flex-col">
      <pre className="border border-border-primary flex rounded-md bg-container-secondary text-xs">
        {`clip-path: ${clipPath})`}
      </pre>
      <div className="flex flex-col items-center justify-center border border-border-secondary rounded-lg py-6  gap-2">
        <div className="relative flex">
          <div
            className="absolute bg-[var(--sh-keyword)] w-full h-full flex z-40 tab-switch-clip-path"
            style={{ clipPath }}
            ref={containerRef}
          >
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className="px-6 text-container-primary cursor-pointer flex items-center gap-2 text-sm z-40 py-1"
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.icon}
                  {tab.label}
                </div>
              );
            })}
          </div>
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className="px-6 text-content-primary cursor-pointer flex items-center gap-2 text-sm py-1 hover:opacity-60 transition-opacity"
                ref={tab.label === activeTab ? activeTabElementRef : null}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.icon}
                {tab.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabSwitch;
