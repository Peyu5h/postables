import React from "react";
import Socials from "./Socials";
import { FaCheck } from "react-icons/fa";

const FadedSocials = () => {
  return (
    <div>
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-4 pt-7 md:pt-24 xl:pe-4 xl:ps-0">
        <h3 className="mb-5 max-w-sm text-2xl font-medium md:text-[40px] md:leading-[42px]">
          Optimized for all social media
        </h3>
        <div className="flex w-full max-w-4xl flex-col justify-between gap-4 md:flex-row">
          <p className="max-w-xl text-sm leading-[20px] text-foreground">
            We&rsquo;ve meticulously designed each template to meet the specific
            guidelines and format requirements of all social media platforms. By
            preserving safe zones and adhering to platform standards, we ensure
            that your posts will always be visually striking, no matter where
            you share them.
          </p>

          <ul className="flex flex-row gap-4 md:flex-col md:gap-1.5">
            <li className="flex min-h-6 items-center gap-2 text-sm text-foreground md:text-lg">
              <FaCheck className="size-1 font-thin text-purple md:size-2.5" />
              Readable
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-foreground md:text-lg">
              <FaCheck className="size-1 font-thin text-purple md:size-2.5" />
              Visible
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-foreground md:text-lg">
              <FaCheck className="size-1 font-thin text-purple md:size-2.5" />
              Accessible
            </li>
          </ul>
        </div>
      </section>
      <Socials />
    </div>
  );
};

export default FadedSocials;
