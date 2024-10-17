import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import MagneticBtn from "./MagnetEffect";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MagneticBtn>
        <button className="text-md md:text-md relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-blackBg px-4 py-2.5 font-semibold text-white transition-colors hover:bg-foreground md:px-6 md:py-3">
          {children} <FaArrowRightLong className="ml-2" />
        </button>
      </MagneticBtn>
    </div>
  );
};

export default Button;
