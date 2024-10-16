"use client";

import { useRef, useEffect, useState } from "react";
import { GoPaste } from "react-icons/go";
import Logo from "~/utils/icons/logo";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsExpanded(scrollPosition >= viewportHeight);
    };

    // Check on load
    checkScrollPosition();

    // Check on scroll
    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <header className="my-4 flex h-[4.5rem] w-full max-w-24 flex-col">
      <nav
        className={`fixed left-1/2 top-8 isolate z-20 flex h-[4.5rem] -translate-x-1/2 items-center justify-between self-stretch overflow-hidden rounded-[20px] bg-blackPri pe-2 ps-5 shadow-[0px_3.35px_2.21px_#0000001c,0px_8.05px_5.32px_#00000014,0px_15.15px_10.02px_#00000011,0px_27.03px_17.87px_#0000000e,0px_50.55px_33.42px_#0000000b,0px_121px_80px_#00000008] transition-all duration-500 ease-in-out md:ps-8 ${
          isExpanded ? "w-[44rem]" : "w-[14rem]"
        }`}
      >
        <div className="relative mr-4 flex flex-shrink-0 items-center gap-5 overflow-hidden text-white">
          <div
            ref={logoRef}
            className={`transition-all duration-300 ${
              isExpanded ? "hidden scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <Logo className="flex-shrink-0 text-3xl" />
          </div>
          <span className="mr-8 whitespace-nowrap text-2xl font-bold italic">
            Postable
          </span>
        </div>

        <div
          className={`group flex h-[3.4rem] w-[32rem] max-w-full flex-shrink-0 items-center gap-0 rounded-xl border-[1.5px] border-primaryHover bg-primaryHover pl-5 pr-3 shadow-lg duration-150 hover:bg-foreground2 ${
            isExpanded ? "" : ""
          }`}
        >
          <input
            className="placeholder-primaryForeground/50 w-full flex-1 bg-transparent py-5 text-sm font-normal text-white focus-visible:outline-none"
            placeholder="Paste tweet link here..."
            type="url"
          />
          <button className="relative inline-flex h-10 flex-shrink-0 items-center justify-center gap-1.5 rounded-[8px] bg-tertiary px-4 text-neutral-100 duration-150 group-hover:bg-hoverPaste">
            <span className="text-sm font-medium">Paste</span>
            <span>
              <GoPaste className="text-xs" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
