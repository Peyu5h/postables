"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { Tablist } from "./Tablist";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Individuals");
  const [isHovered, setIsHovered] = useState(false);

  const tabImages = useMemo(
    () => ({
      Individuals:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061157/Individual_fe1fis.webp",
      Influencers:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Influencers_x5kswv.webp",
      Business:
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Businesses_tc1bbp.webp",
    }),
    [],
  );

  const tabContent = {
    Individuals: (
      <p className="my-4 text-xs leading-[20px] text-mutedGray md:py-14 md:text-[16px]">
        Postable is perfect for individuals who want to elevate their social
        media presence without the hassle. Whether you&apos;re sharing thoughts,
        opinions, or everyday moments, Postable makes it easy to create and
        share beautiful, impactful posts from your tweets.
      </p>
    ),
    Influencers: (
      <p className="my-4 text-xs leading-[20px] text-mutedGray md:py-14 md:text-[16px]">
        For influencers, maintaining a consistent and visually appealing social
        media presence is crucial. Postable empowers you to convert your tweets
        into captivating images that align with your brand, helping you to keep
        your content fresh and engaging across all platforms.
      </p>
    ),
    Business: (
      <p className="my-4 text-xs leading-[20px] text-mutedGray md:py-14 md:text-[16px]">
        Businesses need to stay agile and maintain a strong social media
        presence. Postable helps you quickly turn tweets into polished visuals
        that resonate with your audience, reinforcing your brand and driving
        engagement without the need for a full design team.
      </p>
    ),
  };

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-4 md:-mb-8 md:flex-row md:py-24 xl:pe-4 xl:ps-0">
      <div className="w-full md:w-2/3">
        <h3 className="max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          One Solution for All!
        </h3>
        <p className="mt-1 max-w-80 text-black md:mt-4 md:max-w-full md:text-2xl md:text-foreground">
          <span className="text-[18px]">
            Postable helps everyone to share their thoughts across multiple
            platforms
          </span>
        </p>

        <div className="md:md-10 mt-6">
          <div className="tablist">
            <Tablist onTabChange={setActiveTab} />
          </div>
          <div className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:mt-0">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[32px] bg-transparent p-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <Image
                width={500}
                height={500}
                className="h-auto w-full max-w-[280px] object-contain drop-shadow-xl transition-all duration-300 md:max-w-sm"
                src={tabImages[activeTab as keyof typeof tabImages]}
                alt={activeTab}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
