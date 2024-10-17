import React from "react";
import { FaCoffee, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <div
      className="relative h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[500px] w-full text-white">
        <div className="flex h-full w-full flex-col justify-between p-8 lg:p-48 lg:py-36">
          <h1 className="text-4xl font-bold italic opacity-0 sm:opacity-100">
            Postables
          </h1>
          <div className="mt-8 flex flex-col gap-12 lg:flex-row">
            <div className="">
              <p className="mb-2 font-aspekta text-lg font-bold text-white/60 md:text-[22px]">
                We help you to create postable content!{" "}
              </p>
              <p className="md:text-md w-fit max-w-md text-xs font-normal leading-[18px] text-white/60 md:text-balance">
                Postable is a free, unlimited tool designed to empower
                individuals, influencers, and businesses to amplify their voice
                and effortlessly create engaging content that go beyond the
                ordinary.
              </p>
            </div>
            <div className="text-md flex min-w-72 flex-col gap-6 capitalize text-white/70 md:gap-2">
              <h3 className="-mb-2 font-bold text-white md:mb-2">Products</h3>
              <span>Tweet converter</span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Post scheduler{" "}
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/50">
                  COMING SOON
                </span>
              </span>
              <span className="inline-flex items-center justify-between gap-2 sm:justify-start">
                Screenshot designer{" "}
                <span className="rounded-xl bg-white/10 px-1.5 py-0.5 text-xs font-semibold text-white/50">
                  COMING SOON
                </span>
              </span>
            </div>
            <div className="text-md hidden min-w-72 flex-shrink-0 flex-col gap-6 capitalize text-white/70 md:gap-2 xl:flex">
              <h3 className="-mb-2 font-bold text-white md:mb-2">Company</h3>
              <a href="">Privacy policy</a>
              <a href="">Terms and conditions</a>
              <a href="">Refund policy</a>
            </div>
          </div>
          <div className="my-9 h-0.5 w-full bg-black/5"></div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-4">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 text-4xl text-white sm:flex sm:flex-wrap">
              <SocialButton
                href="#"
                logo={<FaSquareXTwitter />}
                label="X / Twitter"
                sublabel="Follow us on"
              />
              <SocialButton
                href="#"
                logo={<RiInstagramFill />}
                label="Instagram"
                sublabel="Follow us on"
              />
              <SocialButton
                href="#"
                logo={<FaDiscord />}
                label="Discord"
                sublabel="Join community"
              />
              <SocialButton
                href="#"
                logo={<FaCoffee />}
                label="Buy Coffee"
                sublabel="Support us"
              />
            </div>
            <span className="mb-3 inline-block h-fit w-fit flex-shrink-0 text-xs text-white/50 lg:mb-0 lg:ms-auto lg:text-right">
              Copyright 2024 Postables
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
