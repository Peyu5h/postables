"use client";

import React, { useState, useEffect } from "react";
import PreviewImage from "./PostpreviewImage";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const PostpreviewSection = () => {
  const [activePost, setActivePost] = useState("Instagram Story");
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [activePost]);

  const getPostDimensions = () => {
    const baseWidth = 416;
    let aspectRatio: number;

    switch (activePost) {
      case "Instagram Story":
        aspectRatio = 9 / 16;
        break;
      case "X Post":
        aspectRatio = 3 / 4;
        break;
      case "LinkedIn Post":
      case "Facebook Post":
      default:
        aspectRatio = 1 / 1;
    }

    const height = Math.round(baseWidth / aspectRatio);
    return { width: baseWidth, height };
  };

  const { height } = getPostDimensions();

  const variants = {
    enterBackground: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotate: 5,
    }),
    centerBackground: {
      x: 0,
      opacity: 0.4,
      rotate: 5,
    },
    exitBackground: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotate: 5,
    }),
    enterForeground: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    centerForeground: {
      x: 0,
      opacity: 1,
    },
    exitForeground: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div>
      <section
        className="relative mx-auto mb-12 mt-16 w-fit max-w-full rounded-[16px] bg-cover bg-top pt-8 sm:mb-16 sm:rounded-[32px] md:mb-24 md:rounded-[64px] md:px-12 lg:px-24 lg:pt-12"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dkysrpdi6/image/upload/v1729080817/postable/section-background_hz0wlc.png')",
          backgroundSize: "100% 300%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="px-4 sm:px-8 md:px-12">
          <p className="mx-auto max-w-sm text-balance text-center font-aspekta text-2xl font-extrabold leading-[28px] text-white sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]">
            Share Your Voice Beyond Just a Tweet
          </p>
          <p className="mx-auto my-4 max-w-xs text-balance text-center text-sm font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-2xl md:text-base lg:my-12 lg:text-lg">
            Keep your online presence steady and growing by creating
            customizable images from your tweets, perfect for Instagram,
            Facebook, and more.
          </p>
        </header>
        <div className="story mx-auto my-6 flex max-w-full items-center justify-start gap-3 overflow-x-auto overflow-y-clip px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5">
          {[
            { name: "Instagram Story", icon: RiInstagramFill },
            { name: "LinkedIn Post", icon: FaLinkedin },
            { name: "X Post", icon: FaSquareXTwitter },
            { name: "Facebook Post", icon: FaFacebookSquare },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePost(item.name)}
              className={`flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out hover:scale-105 sm:rounded-[10px] sm:px-3 sm:py-2 ${
                activePost === item.name
                  ? "bg-black/20 hover:bg-black/30 active:bg-black/40"
                  : "opacity-50 hover:opacity-75 active:opacity-100"
              }`}
            >
              <item.icon className="text-lg" />
              <h1 className="text-xs font-medium sm:text-sm">{item.name}</h1>
            </button>
          ))}
          <button
            disabled
            className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white opacity-50 transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-75 active:scale-95 active:opacity-100 sm:rounded-[10px] sm:px-3 sm:py-2"
          >
            <div className="text-xs font-medium sm:text-sm">+ more</div>
          </button>
        </div>

        <div
          className="relative flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24"
          style={{
            height: `${height}px`,
            transition: "height 0.5s ease-in-out",
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={`background-${key}`}
              variants={variants}
              custom={-1}
              initial="enterBackground"
              animate="centerBackground"
              exit="exitBackground"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute origin-center drop-shadow-xl"
              style={{
                willChange: "auto",
              }}
            >
              <PreviewImage activePost={activePost} />
            </motion.div>

            <motion.div
              key={`foreground-${key}`}
              variants={variants}
              custom={1}
              initial="enterForeground"
              animate="centerForeground"
              exit="exitForeground"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute origin-center drop-shadow-xl"
            >
              <PreviewImage activePost={activePost} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default PostpreviewSection;
